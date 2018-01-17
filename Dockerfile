#Pull from nginx
FROM nginx

#Move static files to html directory
ADD build /usr/share/nginx/html

#Add custom nginx.conf
ADD config/nginx/nginx.conf /etc/nginx/conf.d/ssl.conf

#Add ssl certs
RUN mkdir /etc/nginx/ssl
ADD config/nginx/nginx.crt /etc/nginx/ssl/nginx.crt
ADD config/nginx/nginx.key /etc/nginx/ssl/nginx.key
 
#Add correct config file and start the server
CMD echo ENVIRONMENT:${env} && cp /usr/share/nginx/html/${env}.config.js /usr/share/nginx/html/env.js && nginx -g 'daemon off;'

