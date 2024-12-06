FROM nginx:1.27-alpine

# Copy les param de nginx dans le dossier nginx (voir doc)
COPY nginx/ /etc/nginx

COPY dist/ /usr/share/nginx/html

# Copy l'entrypoint dans le dossier de demarrage auto de docker
COPY entrypoint.sh /docker-entrypoint.d/entrypoint.sh

# Pas besoin de CMD car nginx gere le run lui meme