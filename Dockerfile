FROM --platform=linux/amd64 node:20

RUN useradd -ms /bin/bash appuser
WORKDIR /home/appuser/app
COPY . .

RUN npm install 
RUN chown -R appuser:appuser  /home/appuser/
RUN chown -R appuser:appuser  /usr/local/lib/node_modules/
USER appuser

CMD [ "node", "index.js" ]

EXPOSE 3000
