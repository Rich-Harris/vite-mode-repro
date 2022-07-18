# vite-mode-repro

```
git clone git@github.com:Rich-Harris/vite-mode-repro.git
cd vite-mode-repro
npm i
npm test
```

## Expected

```
mode === custom-config
dev: false (should be false)
prod: true (should be true)

mode === custom-programmatic
dev: false (should be false)
prod: true (should be true)
```

## Actual

```diff
mode === custom-config
dev: false (should be false)
prod: true (should be true)

mode === custom-programmatic
-dev: false (should be false)
-prod: true (should be true)
+dev: true (should be false)
+prod: false (should be true)
```
