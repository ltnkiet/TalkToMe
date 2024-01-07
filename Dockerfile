
# Stage 1: Build react frontend
FROM node:15.0.0 as frontend

# Working directory be app
WORKDIR /usr/app/frontend/

COPY ./frontend/package*.json .

# Install dependencies
RUN npm install

# copy local files to app folder
COPY frontend/ ./

RUN npm run build


# Stage 2 : Build backend
FROM node:15.0.0

WORKDIR /usr/src/app/
COPY --from=frontend /usr/app/frontend/build/ ./frontend/build/
RUN ls

WORKDIR /usr/src/app/
COPY package*.json ./
RUN npm install -qy
COPY . ./

ENV MONGODB=mongodb+srv://ltnkietviii:ltnkiet%405438@cluster0.mlruzkt.mongodb.net/ChatApp?retryWrites=true&w=majority
ENV JWT_SECRET=ltnkiet
ENV PORT=5000
ENV NODE_ENV=production

EXPOSE 5000

CMD ["npm", "start"]