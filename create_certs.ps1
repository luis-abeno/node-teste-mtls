# Create CA key and certificate
openssl genpkey -algorithm RSA -out ca-key.pem
openssl req -new -x509 -key ca-key.pem -out ca-cert.pem -subj "/CN=Root CA"

# ---------------- Development -------------------------------
# Create server certs
openssl genpkey -algorithm RSA -out server-key.dev.pem
openssl req -new -key server-key.dev.pem -out server-csr.dev.pem -subj "/CN=localhost"
openssl x509 -req -in server-csr.dev.pem -CA ca-cert.pem -CAkey ca-key.pem -CAcreateserial -out server-cert.dev.pem

# Create client certs
openssl genpkey -algorithm RSA -out client-key.dev.pem
openssl req -new -key client-key.dev.pem -out client-csr.dev.pem -subj "/CN=website"
openssl x509 -req -in client-csr.dev.pem -CA ca-cert.pem -CAkey ca-key.pem -CAcreateserial -out client-cert.dev.pem