# ksif-homepage

## 코드 컨벤션

[AGENTS.md](AGENTS.md) 참고.

## 시작하기

```bash
pnpm install
pnpm dev
```

## Git 훅 설정

pre-commit hook이 `.githooks/`에 포함되어 있습니다. 클론 후 1회 실행 필요:

```bash
git config core.hooksPath .githooks
```

커밋 시 staged 파일에 대해 Biome check가 자동으로 실행됩니다.