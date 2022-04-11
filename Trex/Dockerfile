FROM quay.io/lyfe00011/test:beta

RUN git clone https://github.com/Dark-Max-Alpha/v5-new /root/v5-new
WORKDIR /root/v5-new/
RUN yarn install --no-audit
RUN git clone v5-new
RUN cp -R /root/v5-new/* /root/v5-new
CMD ["node", "bot.js"]
