# Spectacol de Craciun — instalare pe Ubuntu

Documentatia se refera la acest repository, nu la demoSite. Nu modifica sursele React.
Comenzile se executa din radacina Git, unde se afla Dockerfile, compose.yaml si Jenkinsfile,
**nu** din subfolderul aplicatiei.

## 1. Ce pornim

- Apache existent pe Ubuntu serveste **spectacol2026.osfiir.ro** pe **80/443**.
- El transmite traficul la **127.0.0.1:18083**, unde Docker publica site-ul.
- Jenkins ramane privat pe **127.0.0.1:8082**. SSH ramane pe 22.
- Proiectul Compose se numeste **spectacol-craciun**, separat de taskbox-students.
- Aplicatia este React/Create React App; build-ul este servit de Apache in container.
  Nu este necesar npm start in productie, nici backend, nici baza de date.
- Donorbox ramane serviciu extern. Nu sunt necesare volume de date pentru acest frontend.

Adresele de inlocuit in comenzi: USER, SERVER_IP, ORG si REPOSITORY.
Adresa finala este https://spectacol2026.osfiir.ro. Portul public 8083 nu mai este necesar. Containerul ramane pe 18083, accesibil numai local.

## 2. Verificari pe server, fara modificari

Conecteaza-te prin SSH si ruleaza:

~~~sh
git --version
docker --version
docker compose version
docker info
systemctl is-active jenkins apache2 docker
sudo ss -ltnp
sudo apache2ctl -S
sudo apache2ctl -M
sudo grep -R '^[[:space:]]*Listen' /etc/apache2/ports.conf /etc/apache2/sites-enabled /etc/apache2/conf-enabled
free -h
df -h /
docker system df
~~~

**Inainte de a continua:** 18083 trebuie sa fie liber. Porturile 80/443 pot fi deja folosite de Apache: adaugam un virtual host distinct, fara sa oprim serviciul. Verifica prin apache2ctl -S ca spectacol2026.osfiir.ro nu are deja un site configurat. Nu schimba 8082, nu adauga directive Listen duplicate si nu dezactiva alte site-uri.

Ai nevoie de Docker Engine si Compose cu suport pentru up --wait, Apache, Git si curl.
Nu reinstala software care exista. Pentru ce lipseste, coordoneaza instalarea cu administratorul:
[Docker Ubuntu](https://docs.docker.com/engine/install/ubuntu/).
Build-ul React poate consuma mai mult RAM decat site-ul final; verifica resursele disponibile.

## 3. Salveaza fisierele in GitHub

Pe calculator, in radacina repository-ului:

~~~sh
git status
git add Dockerfile .dockerignore compose.yaml Jenkinsfile deploy.env.example deploy/httpd.conf apache/spectacol.conf.example SERVER_SETUP.md
git commit -m "Add Docker Apache and Jenkins deployment"
git push origin main
~~~

Revizuieste lista inainte de commit. Nu adauga chei private, tokenuri sau fisiere .env reale.
Nu este nevoie sa modifici package.json, lockfile, src, public sau netlify.toml.

## 4. Verificare manuala a containerului

Pe server, cloneaza folosind accesul Git existent. Nu pune un token in URL-ul comenzii.

~~~sh
git clone https://github.com/ORG/REPOSITORY.git
cd REPOSITORY
docker compose config --quiet
docker compose --env-file deploy.env.example up -d --build --wait
docker compose ps
curl --fail http://127.0.0.1:18083/
curl --fail http://127.0.0.1:18083/artists
curl -I http://127.0.0.1:18083/static/missing.js
~~~

Rezultate: container healthy, HTML pentru / si /artists, **404** pentru assetul inexistent.
Fisierul deploy.env.example contine doar APP_VERSION=local. Fara --env-file, Compose foloseste
aceeasi valoare implicita. Jenkins seteaza APP_VERSION in mediu pentru fiecare build.

Daca build-ul esueaza, opreste-te si citeste eroarea. Nu schimba dependintele si nu relaxa suplimentar
verificarile CI pentru a o ascunde. Sursele sunt pastrate exact asa cum sunt.

## 5. DNS si Apache pentru spectacol2026.osfiir.ro

In panoul DNS care administreaza osfiir.ro, adauga:

| Tip | Nume/Host | Valoare |
| --- | --- | --- |
| A | spectacol2026 | IP-ul public IPv4 al serverului Ubuntu |

Unele panouri cer numele complet spectacol2026.osfiir.ro. Nu modifica inregistrarile
pentru osfiir.ro sau alte subdomenii. Adauga AAAA numai daca serverul are IPv6 functional.
Daca folosesti un proxy DNS/CDN, foloseste initial modul DNS only pentru verificarea directa.
Nu am modificat DNS-ul; IP-ul serverului trebuie completat de tine.

Verifica rezolvarea cu nslookup spectacol2026.osfiir.ro (sau dig +short spectacol2026.osfiir.ro).
Apoi confirma ca nu suprascrii un site Apache existent:

~~~sh
sudo test ! -e /etc/apache2/sites-available/spectacol.conf
~~~

Daca acest test esueaza, inspecteaza configuratia existenta; nu o suprascrie.
Daca trece, din radacina repository-ului:

~~~sh
sudo cp --no-clobber apache/spectacol.conf.example /etc/apache2/sites-available/spectacol.conf
sudo a2enmod proxy proxy_http headers
sudo a2ensite spectacol.conf
sudo apache2ctl configtest
~~~

Numai daca apare **Syntax OK**:

~~~sh
sudo systemctl reload apache2
curl --fail -H 'Host: spectacol2026.osfiir.ro' http://127.0.0.1/
curl --fail -H 'Host: spectacol2026.osfiir.ro' http://127.0.0.1/donate
~~~

Deschide http://spectacol2026.osfiir.ro in browser. Verifica firewallul serverului si al furnizorului pentru 80/tcp si 443/tcp, pastrand regulile SSH existente. Nu activa/reseta firewallul si nu deschide 8082 sau 18083 public. Nu este necesar sa deschizi 8083.

Verifica /artists, /sponsors, /team, /donate prin acces direct si refresh; verifica imaginile,
video-urile si widgetul Donorbox fara a efectua o plata reala. Nu exista endpoint /api in acest proiect.
Un asset lipsa ramane 404, nu index.html. Nu sunt folosite WebSockets.

## 6. Jenkins — acces si agent

Pe calculatorul tau:

~~~sh
ssh -L 8082:127.0.0.1:8082 USER@SERVER_IP
~~~

Deschide http://localhost:8082. Nu instala alt Jenkins si nu publica portul lui.

In **Manage Jenkins → Nodes → nodul Linux de pe acest server → Configure**:
1. Adauga eticheta **spectacol-trusted** la Labels, pastrand etichetele existente.
2. Pastreaza cei doi executori, daca acesta este setup-ul existent.
3. Save. Eticheta trebuie sa identifice un singur server tinta.

Nodul are nevoie de Docker/Compose, Git, curl si shell Unix. Node este in Docker.
Imaginea este construita si folosita pe acelasi daemon Docker; un agent pe alt server nu este
compatibil cu acest flux fara registry sau transfer de imagini.

Utilizatorul agentului trebuie sa aiba acces Docker. Docker group ofera control practic de root
asupra hostului, deci pe acel cont/daemon ruleaza numai cod de incredere.
Nu adauga sudo nelimitat si nu face socketul Docker world-writable.
Daca administratorul accepta acest acces pentru contul jenkins, comanda specifica este
sudo usermod -aG docker jenkins. Apartenenta noua cere repornirea coordonata a serviciului
Jenkins/agentului; nu intrerupe build-uri existente. Verifica din nou listener-ul privat dupa restart.
[Explicatia Docker](https://docs.docker.com/engine/install/linux-postinstall/).

## 7. Jenkins — credentialul GitHub App

1. **Manage Jenkins → Plugins → Installed plugins**: verifica Pipeline, Git si GitHub Branch Source.
   Instaleaza doar pluginurile lipsa, compatibile cu versiunea Jenkins.
2. In GitHub, la instalarea App-ului organizatiei, adauga **acest repository** la Selected repositories.
   Nu oferi acces tuturor repo-urilor. Nu elimina accesul necesar altor job-uri existente.
3. Pastreaza permisiunile Contents read, Metadata read, Pull requests read si Commit statuses read/write.
   Webhooks raman dezactivate.
4. Daca exista deja un credential pentru acelasi App, il poti reutiliza. Altfel:
   **Manage Jenkins → Credentials → store-ul/folderul de incredere → Add Credentials**.
5. Alege **Kind: GitHub App**, **ID: spectacol-github-app**, App ID si cheia privata.
   App ID nu este Installation ID. Cheia se introduce numai in Jenkins, nu in repo sau chat.
6. Daca formatul cheii nu este acceptat, converteste-o in afara repo-ului:
   openssl pkcs8 -topk8 -inform PEM -outform PEM -in ORIGINAL.pem -out JENKINS.pem -nocrypt
7. Test Connection, daca butonul exista in versiunea pluginului, apoi Save.

[Documentatia GitHub App](https://github.com/jenkinsci/github-branch-source-plugin/blob/master/docs/github-app.adoc).

## 8. Jenkins — job-ul, pas cu pas

1. Dashboard → **New Item**.
2. Nume: **spectacol-craciun**.
3. Tip: **Multibranch Pipeline** → OK. Nu alege Pipeline simplu: Jenkinsfile foloseste BRANCH_NAME.
4. **Branch Sources → Add source → GitHub**.
5. Credentials: credentialul App existent sau spectacol-github-app.
6. Repository HTTPS URL/Owner/Repository (in functie de versiunea UI): selecteaza organizatia si acest repo.
7. **Behaviors**:
   - Discover branches: permite descoperirea branch-urilor.
   - Adauga **Filter by name (with regular expression)**: **^main$**.
   - Elimina Discover pull requests from origin si Discover pull requests from forks.
   - Nu activa descoperirea tagurilor sau checkout prin SSH.
8. **Build Configuration**: by Jenkinsfile; Script Path: **Jenkinsfile** (la radacina Git).
9. **Scan Multibranch Pipeline Triggers**: bifeaza **Periodically if not otherwise run**, interval 5 minute.
   Nu activa webhooks sau administrarea automata a lor.
10. Save → **Scan Multibranch Pipeline Now** → verifica Scan Log. Trebuie sa apara numai main.

Protejeaza main cu review in GitHub si limiteaza accesul la configurarea job-ului.
Filtrarea trebuie facuta in dashboard, nu doar in Jenkinsfile: un PR poate modifica propriul pipeline.
Nu lasa PR-uri nevalidate pe agentul cu Docker. [Multibranch Jenkins](https://www.jenkins.io/doc/book/pipeline/multibranch/).

## 9. Prima rulare si publicarea

Prima scanare poate porni automat build-ul. **DEPLOY este implicit false.**

In job-ul main → build → **Console Output**, asteapta:
- Checkout;
- Validate and build: npm ci si build React in imagine, cu CI=false doar pentru comanda de build;
- HTTP checks: container temporar fara porturi publicate, pagini, JS si raspunsuri 404;
- Deploy: sarit.

Nu exista teste unitare in repository, desi package.json are un script test.
La cererea utilizatorului, build-ul permite avertismentele existente pentru importuri nefolosite; acestea raman vizibile. Erorile reale continua sa opreasca build-ul. CI=false nu dezactiveaza Jenkins sau verificarile HTTP.
Pipeline-ul nu pretinde ca le-a rulat: verifica build-ul si HTTP. Rezultatele si logurile
sunt in **Artifacts → reports/**, inclusiv release.txt si imaginea/configuratia release-ului.

Dupa un build reusit:
1. main → **Build with Parameters**.
2. Bifeaza **DEPLOY** → Build.
3. Verifica etapa Deploy, apoi https://spectacol2026.osfiir.ro (dupa activarea TLS din pasul 11).
4. Repeta verificarea vizuala a paginilor si Donorbox.

Jenkins publica aceeasi imagine verificata, fara rebuild la deploy.
Un singur build al acestui job ruleaza odata. Nu crea al doilea job de deploy pentru aceeasi
aplicatie si nu face deploy manual in paralel. Celelalte proiecte au nume/porturi distincte.
Nu sunt montate sursele sau socketul Docker in containerul web.

Polling-ul face build/test, nu deploy automat. Pentru deploy automat dupa schimbarile aprobate
pe main, seteaza ulterior defaultValue: true la parametrul DEPLOY din Jenkinsfile.

## 10. Loguri, actualizare, rollback

~~~sh
docker compose ps
docker compose logs --tail=100
sudo apache2ctl -S
sudo apache2ctl configtest
sudo tail -n 50 /var/log/apache2/spectacol-error.log
~~~

- Build esuat: citeste prima eroare din Console Output; nu repeta acelasi deploy fara remediere.
- Agent indisponibil: verifica eticheta spectacol-trusted si starea Online.
- GitHub 403: verifica instalarea App pe acest repo, cheia si credentialul ales.
- 502 Apache: testeaza mai intai 127.0.0.1:18083 si sanatatea containerului.
- Pagina principala merge, dar /artists nu: verifica folosirea imaginii si configuratiei SPA din acest repo.
- Din exterior nu merge: verifica DNS, virtual host-ul, porturile 80/443 si firewallul; nu opri Jenkins pentru asta.

Pentru revenire, opreste lansarea de build-uri noi si asteapta terminarea celui activ.
Alege tagul precedent din reports/previous-image.txt sau release.txt al unui build bun.
Pastreaza imaginea locala si descarca **compose-release.yaml** al acelui build.
Din directorul cu configuratia descarcata:

~~~sh
docker compose -p spectacol-craciun -f compose-release.yaml up -d --no-build --pull never --wait
curl --fail http://127.0.0.1:18083/
~~~

Aceasta foloseste exact tagul salvat in configuratie. Nu necesita acces la vechiul workspace
deoarece nu reconstruieste imaginea. Nu folosi prune global; ar putea elimina imagini necesare
altor proiecte sau rollback-ului. Nu exista date locale de restaurat pentru acest frontend.
Deploy-ul poate intrerupe scurt site-ul; nu este zero-downtime.

Pentru a retrage numai noua configuratie Apache:
sudo a2dissite spectacol.conf, apoi configtest si reload doar daca testul trece.
Nu dezactiva site-urile vecine.

## 11. HTTPS pentru spectacol2026.osfiir.ro

Continua numai dupa ce DNS indica serverul corect si site-ul raspunde pe HTTP.
Foloseste mecanismul de certificate existent; nu instala un al doilea manager de certificate.
Daca serverul foloseste Certbot cu pluginul Apache:

~~~sh
certbot --version
sudo certbot certificates
sudo cp --no-clobber /etc/apache2/sites-available/spectacol.conf /etc/apache2/sites-available/spectacol.conf.before-https
sudo certbot --apache -d spectacol2026.osfiir.ro --redirect
sudo apache2ctl configtest
curl --fail https://spectacol2026.osfiir.ro/
curl --fail https://spectacol2026.osfiir.ro/artists
~~~

Certbot configureaza certificatul pentru acest subdomeniu si redirectarea HTTP catre HTTPS.
Verifica rezultatul cu sudo apache2ctl -S si testeaza si site-urile existente. Nu modifica
certificatele domeniilor vecine. Daca Certbot lipseste, urmeaza procedura administratorului
sau [ghidul Ubuntu](https://ubuntu.com/server/docs/how-to/security/obtain-tls-certificates/).
Verifica reinnoirea doar pentru certificatul nou, folosind numele exact din certbot certificates:

~~~sh
sudo certbot renew --cert-name NUMELE_CERTIFICATULUI_SPECTACOL --dry-run
~~~

Daca ai activat anterior varianta pe 8083, compara si salveaza configuratia existenta inainte
de a instala noua varianta; instructiunea cp --no-clobber nu o suprascrie. Elimina Listen 8083
numai din configuratia acestui site, daca nu mai este folosit de alt serviciu. Nu opri procese
si nu schimba listener-ul Jenkins, care ramane privat pe 127.0.0.1:8082.
## Verificari locale

Rezultatele exacte ale verificarii initiale sunt raportate la predare. Docker/Apache/Jenkins
pe Ubuntu trebuie verificate pe server; o validare Compose nu demonstreaza un deploy reusit.
Instalarile/buildurile locale de verificare se fac intr-o copie temporara, nu in sursele originale.
