FROM nginx:1.27-alpine

ARG PORT
ARG CLIENT_HOST
ARG CLIENT_PORT
ARG API_HOST
ARG API_PORT
ARG USER_HOST

ENV PORT=$PORT
ENV CLIENT_HOST=$CLIENT_HOST
ENV CLIENT_PORT=$CLIENT_PORT
ENV API_HOST=$API_HOST
ENV API_PORT=$API_PORT
ENV USER_HOST=$USER_HOST

ENV CONF_TEMPLATE=/etc/nginx/nginx.template.conf
COPY nginx.template.conf /etc/nginx/nginx.template.conf

COPY init /usr/local/bin/init-nginx
RUN chmod +x /usr/local/bin/init-nginx
RUN /usr/local/bin/init-nginx

RUN mkdir -p \
  /tmp/client_temp \
  /tmp/proxy_temp \
  /tmp/fastcgi_temp \
  /tmp/uwsgi_temp \
  /tmp/scgi_temp
RUN chown -R 101:101 \
  /tmp/client_temp \
  /tmp/proxy_temp \
  /tmp/fastcgi_temp \
  /tmp/uwsgi_temp \
  /tmp/scgi_temp

CMD ["nginx", "-g", "daemon off;"]
