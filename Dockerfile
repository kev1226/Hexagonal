# Imagen base
FROM node:18

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./
RUN npm install

# Copiar todo el proyecto
COPY . .

# Establecer el directorio donde se ejecuta el archivo principal
WORKDIR /app/app

# Exponer el puerto
EXPOSE 3002

# Comando para iniciar la app
CMD ["node", "server.js"]
