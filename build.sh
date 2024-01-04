set -e

echo ">> Cleaning old build files"
rm -rf dist src/custom-admin-ui/admin-ui

echo ">> Compiling project"
tsc -p tsconfig.build.json

echo '>> Compiling admin ui'
ts-node src/custom-admin-ui/compile-admin-ui.ts

echo '>> Copying files'
mkdir -p dist/custom-admin-ui/admin-ui dist/static/email

set +e

cp -r src/custom-admin-ui/admin-ui/dist dist/custom-admin-ui/admin-ui/dist
cp -r static/email/templates dist/static/email/

set -e
