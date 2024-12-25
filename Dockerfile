# Use Node.js 20 base image
FROM node:20

# Set working directory
WORKDIR /usr/src/app

# Copy the rest of the application code
COPY . .

# Install dependencies
RUN npm install

# Generate Prisma Client code
RUN npx prisma generate

# Expose the port the app runs on, here, I was using port 3333
EXPOSE 4200

# Command to run the app
CMD [  "npm", "run", "start:migrate:prod" ]