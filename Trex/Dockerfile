FROM souravkl11/raganork:test

RUN git clone https://github.com/Dark-Max-Alpha/v5-new
WORKDIR /v5-new
ENV TZ = Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
