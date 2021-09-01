# A proof of concept for a playwright problem

Setup:

```bash
npm ci
npm run dev
```

Then run the test in another terminal:

```bash
npm run test
```

After that you should get the following output:

```
  ✘  tests/example.spec.js:3:1 › basic test (664ms)


  1) tests/example.spec.js:3:1 › basic test ========================================================

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: "http://localhost:3000/page-2"
    Received: "http://localhost:3000/"

      4 |   await page.goto("http://localhost:3000");
      5 |   await page.click('text=Page 2');
    > 6 |   expect(page.url()).toBe('http://localhost:3000/page-2');
        |                      ^
      7 | });
      8 |

        at /home/henrik/Code/playwright-problem-poc/tests/example.spec.js:6:22
        at WorkerRunner._runTestWithBeforeHooks (/home/henrik/Code/playwright-problem-poc/node_modules/@playwright/test/lib/test/workerRunner.js:426:7)


  1 failed
    tests/example.spec.js:3:1 › basic test =========================================================
```
