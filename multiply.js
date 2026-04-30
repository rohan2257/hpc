export default function handler(req, res) {
  const n = parseInt(req.query.n || "200");

  // Generate matrices
  const A = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => Math.random())
  );
  const B = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => Math.random())
  );

  const start = Date.now();

  // Matrix multiplication
  const C = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        C[i][j] += A[i][k] * B[k][j];
      }
    }
  }

  const end = Date.now();

  res.status(200).json({
    size: n,
    time: (end - start) / 1000
  });
}
