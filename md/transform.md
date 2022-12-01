# transform

transform로 엘리먼트를 마음대로 변형이 가능하다.
transform으로 가능한 동작은 다음과 같다.

- 위치를 옮긴다.
- 회전을 시킨다.
- 크기를 조절한다.
- 박스를 비튼다.

- transform [속성값]

  - _translate(x,y)_: 엘리먼트를 이동시킬 때 사용한다.

    - translateX([크기]) X축 기준으로 움직인다.
    - translateY([크기]) Y축 기준으로 이동한다.
      - 모두 적용하고 싶다면 한줄에 적는다.
      - translateX([크기]) translateY([크기])

  - _scale_: 지정한 크기만큼 확대 혹은 축소시켜준다.

    - scaleX([배율]) X축 기준으로 비례한다.
    - scaleY([배율]) Y축 기준으로 비례한다.
      - 모두 적용하고 싶다면 한줄에 적는다.
    - scaleX([배율]) scaleY([배율])

  - _rotate_: 엘리먼트를 회전시킬 때 사용한다.

    - rotateX([각도]) X축 기준으로 회전한다.
    - rotateY([각도]) Y축 기준으로 회전한다.
    - rotateZ([각도]) Z축 기준으로 회전한다.(일반적으로 생각하는 회전)

```html
<head>
  <style>
    .box {
      width: 300px;
      height: 300px;
      background-color: salmon;
    }
  </style>
</head>

<body>
  <div class="box"></div>
</body>
```
