FROM node:24-alpine AS build
WORKDIR /app
COPY spectacol-caritabil-de-craciun/package.json spectacol-caritabil-de-craciun/package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY spectacol-caritabil-de-craciun/ ./
# Public frontend configuration, embedded in the compiled JavaScript.
ARG REACT_APP_EMAILJS_SERVICE_ID
ARG REACT_APP_EMAILJS_TEMPLATE_ID
ARG REACT_APP_EMAILJS_PUBLIC_KEY
RUN test -n "$REACT_APP_EMAILJS_SERVICE_ID" \
    && test -n "$REACT_APP_EMAILJS_TEMPLATE_ID" \
    && test -n "$REACT_APP_EMAILJS_PUBLIC_KEY" \
    || { echo 'Missing required EmailJS build configuration'; exit 1; }
# Keep existing source warnings visible without failing the build (approved).
RUN CI=false npm run build

FROM httpd:2.4-alpine
RUN sed -i 's/^#LoadModule rewrite_module/LoadModule rewrite_module/' /usr/local/apache2/conf/httpd.conf \
    && printf '\nInclude conf/extra/spectacol.conf\n' >> /usr/local/apache2/conf/httpd.conf
COPY deploy/httpd.conf /usr/local/apache2/conf/extra/spectacol.conf
COPY --from=build /app/build/ /usr/local/apache2/htdocs/
RUN httpd -t
EXPOSE 80
