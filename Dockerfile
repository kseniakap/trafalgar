# Choose builder base image
FROM node:16-alpine as builder

# Create app directory
WORKDIR /srv/app

# Builder image must contain a certificate /etc/ssl/certs/ca-bundle.crt
# Default Node image is spkp-docker.nexus-ci.corp.dev.vtb/ubi8/nodejs-14

# Install build essentials
RUN apk add --no-cache make gcc g++ python3 curl git

# Install app dependencies

COPY package.json package-lock.json ./

RUN npm ci

# ========================================================================
# Everyhing above here should change rarely to benefit from docker caching
# ========================================================================


# Copy source code and pre-build artifacts
COPY . .

# Build app
USER root

RUN npm run build \
    && npm prune --production \
    && chown -R root:root node_modules

# ======================================
# Everyhing above here is the build step
# ======================================


# Choose runtime base image
FROM node:16-alpine

# Create app directory
WORKDIR /srv/app

# Copy the build artifacts from the build stage
# Ordered by change frequency to benefit from docker caching
COPY --from=builder /srv/app/dist dist
COPY --from=builder /srv/app/package.json package.json
COPY --from=builder /srv/app/node_modules node_modules
COPY --from=builder /srv/app/index.js index.js

# Start app
CMD ["npm", "run", "start"]
