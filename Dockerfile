FROM node:22.1.0-alpine3.18

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .


EXPOSE 8086


ENV MONGO_URI="mongodb+srv://asifasifpsps:ntpJjSNnUk0ZZ1Po@cluster0.hvv0cvd.mongodb.net/OrderService?retryWrites=true&w=majority&appName=Cluster0"

ENV STRIPE_SECRET_KEY="sk_test_51L06jrSBZHWEgXwyfsLbGCLUrzUGQ01kczGyo3eZQiKmqpGsWRvSHI3Wd6oXch6F2rXH83ikQixLUh7H47DiPpi900jHsBNI8F"

ENV CLIENT_SITE_URL="http://localhost:5000"

CMD [ "npm", "start" ]