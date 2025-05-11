# Use the official Node.js image as a base
FROM node:23-alpine
# Set the working directory inside the container
WORKDIR /src
# Copy package.json and install dependencies (if any)
COPY package*.json ./
# Copy the rest of the application code
COPY . .
# Expose port 8080 for Cloud Run
EXPOSE 8080
# Start the app
CMD ["node", "index.js"]