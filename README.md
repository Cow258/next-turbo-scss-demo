# Reproduce Turbo Scss bug

## Using this example

Run the following command:

```sh
pnpm i
pnpm types
pnpm dev
```

1. Open `packages/client/styles/page/_home.scss`
2. Change the .demo-head to red
3. It will never compile again that mean hot reload not working
