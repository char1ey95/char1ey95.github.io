# matchMedia

- matchMedia 함수가 기본적으로 제공된다.
- 인자값으로는 CSS의 미디어쿼리 문법이 들어간다.
- CSS에서 미디어쿼리 문을 직접 가져와서 넣어도된다.

```Javascript
const media = window.matchMedia(mediaQueryString)
//matchMedia("screen and (orientation:portrait")
//matchMedia("only screen and (min-width: 768px)")
```

- matchMedia()는 MediaQueryList를 반환하는데 이 객체는 media와 matches라는 두 프로퍼티를 가지고있다.
  - `media`는 사용한 미디어쿼리 문자열을 반환한다.
  - `matches`는 현재 화면에 미디어쿼리의 범위에 들어가면 `true`를 반한하고 아니면 `false`를 반환한다.
