# transition

- _transition-duration_: transition이 지속되는 시간을 지정한다.

  - 값 [number] [단위];
    - number 시간
    - 단위 s(초)
  - hover와 주로 같이 사용된다.
  - 마우스가 내려갔을 때에도 자연스럽게 적용하고 싶다면, hover가 아닌 원본에 속성을 부여한다.
    - 올렸을 때와 내렸을 때에 적용(element)
    - 올렸을 때에만 적용(hover)

- _transition-delay_: transition이 시작되는 시간을 연기해준다.

  - 값 [number] [단위];
  - number 시간
  - 단위 s(초)
  - 마우스가 내려갔을 때에도 자연스럽게 적용하고 싶다면, hover가 아닌 원본에 속성을 부여한다.
    - 올렸을 때와 내렸을 때에 적용(element)
    - 올렸을 때에만 적용(hover)

- _transition-timing-function_: transition의 가속도를 설정한다.
  - 값 [ease-in-out], [cubic-bezier];
  - ease-in-out
  - cubic-bezier 가속도 값을 변형한다.

```html
<head>
  <style>
    .box {
      width: 300px;
      height: 300px;
      background-color: salmon;
    }

    .box:hover {
      background-color: gold;
    }
  </style>
</head>

<body>
  <div class="box"></div>
</body>
```
