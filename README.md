# Express Typescript Babel Firestore API Starter 

# Before you install

Make sure you have following installed on your system
- [node.js](https://nodejs.org/en/)
- [yarn](https://classic.yarnpkg.com/en/)

#  Installation Guide

1. clone this repo 

```bash
git clone git@github.com:jsharma44/express-typescript-babel-firestore-starter.git
```

2. install 

```bash 
yarn run copy && yarn install 
```

3. Go to [firebase Console](https://console.firebase.google.com/) and create a firebase project and create a firestore document. Now go to Project Setting -> servicea ccounts and download your service account key file.

4. copy paste content of key file to (serviceAccountKey.json)(serviceAccountKey.json)
5. set envouirnment confing in [.env](.env)


# Start Application

1. For developmet

```bash
yarn run dev
```

2. For Production

```bash
yarn run start
```