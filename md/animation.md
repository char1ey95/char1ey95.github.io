# animation

가장 많이 사용되는 animation 속성 위주로 알아보자.

- _animation-name_ : 이름을 임의로 지정한다.

  - 값 [name];

- _animation-duration_ : 재생시간을 지정한다.

  - 값 [number] [단위];
  - numbeer 시간

- _animation-iteration-count_ : 반복횟수를 지정한다.

  - 값 [number] or [infinite];
  - number 횟수
  - infinite 무한반복

- _animation-direction_: 방향을 지정한다.

  - 값 [normal(default)], [alternate] and [alternate-reverse];
  - normal 기본값
  - alternate 종료지점 도달시 반대방향으로 이동
  - alternate-reverse 시작위치를 종료지점으로 변경

- _animation-delay_: 딜레이 시간을 지정한다.

  - 값 [number] [단위];
  - number 딜레이 시킬 시간

- _animation-timing-function_: 가속도를 지정한다.

  - 값 [linear], [cubic-bezier];
  - linear 가속이 일정하게 유지된다.
  - cubic-bezier 가속을 세미하게 지정할 수 있다.

- _animation-fill-mode_: 애니메이션 종료시 상태를 지정한다.
  - 값 [""], [forwards];
  - forwards 종료지점에서 멈춘다.

# keyframe

- @keyframes [animation_name] {
  from {
  [css]
  }

  to {
  [css]
  }

}

- from : 시작지점(어디서부터)
- to : 종료지점(어디까지)

```html
<head>
  <style>
    .name {
      width: 100px;
      height: 100px;
      background: salmon;
    }

    @keyframes name {
      from {
        margin-left: 0;
      }

      to {
        margin-left: 200px;
      }
    }
  </style>
</head>

<body>
  <div class="name"></div>
</body>
```
