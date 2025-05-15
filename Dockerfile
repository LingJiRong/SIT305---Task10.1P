# Use Node.js base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Expose port and start app
EXPOSE 8080
CMD ["npm", "start"]
