import './Organization.scss';

const TeamCard = ({ number, title, description }) => {
  return (
    <div className="org-card">
      <span className="org-number">{number}</span>
      <h3 className="org-title">{title}</h3>
      <p className="org-desc">{description}</p>
    </div>
  );
};

const Organization = () => {
  return (
    <section className="organization-section">
      
      {/* Etichetă Sus */}
      <span className="organization-tag">FIECARE ROL CONTEAZĂ</span>

      {/* Grid-ul cu cele 3 echipe */}
      <div className="organization-grid">
        <TeamCard 
          number="01" 
          title="Organizare" 
          description="Oamenii care transformă ideile într-o seară memorabilă." 
        />
        <TeamCard 
          number="02" 
          title="Comunicare" 
          description="Poveștile și mesajele care aduc comunitatea aproape." 
        />
        <TeamCard 
          number="03" 
          title="Voluntari" 
          description="Energia și grija din fiecare detaliu al evenimentului." 
        />
      </div>

    </section>
  );
};

export default Organization;