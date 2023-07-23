# Base image
FROM node:16

WORKDIR /app

COPY package.json ./

RUN npm install --omit=dev

# Copy application code
COPY . .

# Build application
RUN npm run build

# RUN npm start
CMD [ "npm", "start"]

EXPOSE 8000
