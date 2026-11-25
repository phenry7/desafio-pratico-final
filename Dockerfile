
FROM nginx:alpine

LABEL maintainer="Phillipe Henry"
LABEL description="Projeto Final DevOps"

COPY index.html /usr/share/nginx/html/index.html
COPY src/ /usr/share/nginx/html/src/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
