# CLAUDE.md

## 프로젝트 개요

React 기반 프론트엔드 프로젝트.

- **패키지 매니저**: pnpm (npm, yarn 사용 금지)
- **언어**: TypeScript (strict 모드, `any` 사용 금지)
- **빌드**: Vite
- **스타일**: Tailwind CSS v4
- **Linter/Formatter**: Biome (ESLint/Prettier 사용 안 함)

## 주요 명령어

```bash
pnpm dev        # 개발 서버
pnpm build      # 프로덕션 빌드
pnpm lint       # Biome check (전체)
pnpm format     # Biome format
```

## 경로 alias

`@/*`는 프로젝트 루트 또는 `src/` 둘 다 resolve됨 (tsconfig paths + vite-tsconfig-paths).

```ts
import { Foo } from '@/components/Foo'; // src/components/Foo 또는 ./components/Foo
```

## 디자인 시스템

UI 작업 시 반드시 `DESIGN.md`를 먼저 읽고 해당 디자인 토큰(색상, 타이포그래피, 컴포넌트 스펙)을 적용할 것.
디자인은 프로젝트 진행 중 변경될 수 있으므로, UI 관련 작업 요청이 들어올 때마다 최신 `DESIGN.md`를 확인해야 한다.

디자인 토큰을 코드로 옮길 때는 Tailwind CSS v4 유틸리티 클래스를 우선 사용한다.
- 색상: `bg-[#0064e0]`, `text-[#1c1e21]` 형태의 arbitrary value 사용
- 간격: `p-4`, `gap-6` 등 Tailwind 스케일이 맞으면 그대로, 안 맞으면 `p-[14px]`
- 폰트: `text-[16px]`, `font-[330]`, `leading-[1.5]`, `tracking-[-0.14px]`
- 테두리/라운드: `rounded-[8px]`, `border border-[#dbdbdb]`
- inline `style` prop은 Tailwind로 표현할 수 없는 경우(CSS 변수, 그라디언트 border 트릭 등)에만 허용

@DESIGN.md

## 코드 컨벤션

Biome이 자동으로 적용하는 항목:
- 따옴표: JS/TS는 single quote, JSX attribute는 double quote
- 세미콜론: 항상 붙임
- trailing comma: ES5 스타일
- import 정렬: 자동 (organizeImports)

### 컴포넌트 선언 스타일

React 컴포넌트는 **arrow function** 스타일로 작성한다. `function` 선언식 사용 금지.

```ts
// ✅
export const MyComponent = ({ title }: Props) => {
  return <div>{title}</div>;
};

// ❌
export function MyComponent({ title }: Props) {
  return <div>{title}</div>;
}
```

내부 헬퍼 컴포넌트(non-exported)도 동일하게 `const` 화살표 함수로 작성한다.

### Tailwind CSS arbitrary value 정책

Tailwind v4 네이티브 스케일(1 unit = 4px)로 표현 가능한 값은 arbitrary value `[Npx]` 대신 네이티브 값을 사용한다.

**크기·간격** — `N px ÷ 4 = scale` 으로 변환:
- `max-w-[980px]` → `max-w-245`, `py-[96px]` → `py-24`, `gap-[5px]` → `gap-1.25` 등

**폰트 굵기** — named 클래스 사용:
- `font-[400]` → `font-normal`, `font-[500]` → `font-medium`, `font-[600]` → `font-semibold`

**줄 높이** — named 클래스가 있는 경우에만:
- `leading-[1]` → `leading-none`, `leading-[1.50]` → `leading-normal`

**border-radius** — named 클래스 사용:
- `rounded-[8px]` → `rounded-lg`, `rounded-[12px]` → `rounded-xl`

**유지하는 arbitrary value** (named 대응 없음):
- 색상: `bg-[#0a1530]`, `text-[#37352f]` 등
- 폰트 크기: `text-[16px]`, `text-[clamp(...)]`
- letter-spacing: `tracking-[-2px]`, `tracking-[1px]` 등
- 비정수 leading: `leading-[1.05]`, `leading-[1.55]` 등

## public/ 디렉토리 보호 규칙

`public/` 하위 파일은 **절대 수정하지 않는다.**

- `public/data/*.json` — 콘텐츠 데이터. 사람이 직접 편집하는 파일이므로 agent가 덮어쓰면 안 됨.
- `public/assets/` — 이미지, 폰트 등 정적 리소스.

코드 작업 중 `public/` 파일의 내용을 참조(Read)하는 것은 허용하지만, 생성·수정·삭제는 금지.
