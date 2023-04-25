# Base image
FROM node:18-alpine

# Create app directory - where's the app?
WORKDIR /usr/src/app

# Copy both package.json and package-lock.json to the pwd
COPY package*.json ./

# Gimme the good shiz
RUN npm ci

# Copy my source code from my machine to this OS for building
COPY . .

# Use the node user from the image (instead of the root user)
# USER node

# Build into dist dir for prod
RUN npm run build

ENV NODE_ENV production

CMD ["node", "dist/main.js"]
