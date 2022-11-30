# CSS 반응형 웹

웹 컨턴츠를 PC와 모바일에서 동등하게 서비스 제공 받기를 원하지만, 여러 종류의 웹을 만들어 제공할 수 없다.
이를 해결하기 위해서 반응형 웹이 나온것이다.

## 반응형 웹(Responsive Web)
- 디바이스의 종류에 따라 웹페이지의 크기가 자동적으로 재조정 되는 것이다.
- 어떠한 환경에서도 그에 맞게 사이즈가 변화하여 편리하다.
- HTML 소스는 오직 하나만 있으면 된다.

## 모바일 퍼스트
- PC 보다 모바일을 먼저 생각해서 디자인하고 프로그래밍하는 기법이다.
- 일반 사용자보다 웹 사용자가 늘어남에 생겼다.
- 고사양 웹이 저사양 웹에서도 불편함이 없어야한다.

## 미디어 쿼리(Media Query)
- 미디어 타입으로 단말기 종류에 따라 각각 다른 스타일을 적용 시키는 것이 가능하다.

### 미디어 쿼리 적용방법

1. <link>
    - <link> 태그는 <head> 태그 안에 위치하여 media 속성 안 조건에 만족할 떄 해당 CSS파일을 불러온다. 
```html
<link href="cssfile.css" media="screen and (min-width: 512px) and (max-width: 1024px)" rel="stylesheet">
```

2. <style>
    - <style>태그는 <head>태그 안에 위치하여 media 속성 안 조건에 만족할 때 스타일을 적용 시킨다.
```html
<style type="text/css" meida="screen and (min-width:512px) and (max-width:1024px)">
/* style */
</style>
```

3. <style> - @import
    - <style>태그 안에서 @import를 사용하여 뒷 부분의 미디어 쿼리를 만족 할 때 해당 CSS 파일을 불러온다.
```html
<style>
    @import url(cssfile.css) screen and (min-width:152px) and(max-width:1024px);
</style>
```

4. CSS 파일
    - 불러온 CSS파일 안 혹은 <style>태그 안에서 직접 미디어 쿼리를 작성하여 만족할 때 해당 스타일을 적용시킵니다.

### 미디어 쿼리 문법

    @media only screen and (min-width: 400px) {...}
    @media [only/not] [미디어 타입] and(속성 구분자) [속성:속성값] {...}
- only는 뒤의 조건만, not은 뒤의 조건을 제외한 조건을 뜻한다.
- 미디어 쿼리는 연산자(=, <, > 등)를 사용하지 않고, min- 혹은 max-를 붙여 최소,최대를 판단한다.
- 속성은 and [속성:속성값] and [속성:속성값]으로 나열할 수 있으며, min-max 이용시 범위로도 설정이 가능하다.

#### 미디어 타입의 종류
- `all` : 모든 미디어 타입
- `screen` : 컴퓨터 스크린, 대부분의 컴퓨터와 모바일 기기를 뜻한다.
- `print` : 인쇄 용도
- aural : 음성 합성장치
- braille : 점자 표시 장치
- handheld : 손으로 들고 다니면서 볼 수 있는 작은 스크린에 대응하는 용도(모바일 기기가 아니므로 착각 주의!)
- projection : 프로젝터
- tty : 디스플레이 능력이 한정된 텔렉스, 터미널 또는 수동 이동 장치등 고정 된 글자를 사용하는 미디어
- tv : 음성과 영상이 동시 출력되는 장치
- embrossed : 페이지에 인쇄된 점자 표지 장치

#### 미디어 쿼리문의 속성과 속성 값
- width : 웹페이지의 가로 길이
- height : 웹페이지의 세로 길이
- device-width : 단말기의 물리적인 가로길이
- device-height : 단말기의 물리적인 세로길이
- orientation : width와 height을 구하여 width 값이 길면 landscape로, height 값이 길면 portrait로 판단한다.
- aspect-ratio : width/height 비율을 판단한다.
- device-aspect-ratio : 단말기의 물리적인 화면 비율을 판단한다.
- color-index : 단말기에서 사용하는 최대 색상수를 판단한다.
- monochrom : 흑백 컬러만을 사용하는 단말기에서 흰색과 검은색 사이의 단계를 판단한다.
- resolution : 지원하는 해상도를 판단한다. 값으로 dip(인치당 도트 수) 혹은 dpcm(cm당 도트 수)를 사용한다.
    - 아이폰 3와 아이폰 4같은 화면의 크기는 같지만 `지원하는 해상도가 다른 기기의 경우를 판단할 때` 쓰면된다.
- color : 단말기에서 사용하는 최대 색상 수의 비트 수를 판단한다. 자연수를 스지만 2의 지수를 뜻한다.
    - 1 = 2, 2 = 4, 3 = 8, ...

```html
<html>
    <head>
        <style>
            div {
                width:100%;
                height:100%;
            }
/* 0px ~ 100px */
            @media screen and (max-width:100px){
                div {
                    background-color:blue;
                }
            }
/* 100px ~ 200px */
            @media screen and (min-width:100px) and (max-width:200px){
                div {
                    background-color:red;
                }
            }
/* 200px ~ */
            @media screen and (min-width:200px){
                div {
                    background-color:green;
                }
            }
        </style>
    </head>
    <body>
        <div></div>
    </body>

</html>
```

## 유동형 그리드(Fluid Grid)
- 그리드는 웹 화면의 폭을 몇 개의 컬럼으로 나누는 것이다.
- 상황에 따라 몇개의 컬럼들을 묶어 사용하며(이를 class라 한다), 컬럼들의 폭과 다른 컬럼과의 간격도 일정하게 유지한다.
- 고정 값을 가질 수도 있으며, 다른 값을 가질 때에는 컬럼의 갯수의 형태로 표현한다.
- `유동형 그리드`는 그리드의 폭을 고정 값이 아닌 em 또는 %의 값으로 설정하는 것을 말한다. 즉, 가로 폭길이의 변화에 따라서 컬럼의 크기가 상대적으로 변하게 하는 방법이다.

```html
<!-- 유동형 그리드 예시 -->
<html>
    <head>
        <style>
            div {
                height: 100%;
                float: left;
            }
            #gird_1 {
                width: 30%;
                background-color: red;
            }

            #gird_2 {
                margin-left: 5%;
                width: 45%;
                background-color: blue;
            }

            #gird_3 {
                margin-left: 5%;
                width: 15%;
                background-color: green;
            }
        </style>
    </head>
    <body>
        <div id="grid_1"></div>
        <div id="grid_2"></div>
        <div id="grid_3"></div>
    </body>
</html>
```

## 유동형 레이아웃(Liquid Layouts)
- 유동형 그리드와 같이 반응형 웹 기법 중 하나이다.
- 레이아웃의 크기를 유동형 그리드와 같이 상대적 단위로 지정하여 웹의 크기에 따라 유동적으로 변화를 준다.
- 반응형 그리드와 같이 미디어 쿼리를 사용하여 `일정 크기`가 되면 `레이아웃 구조`를 바꾸어 주는 방법이다.
- 특정 부분이 사라지거나 합쳐지는 등의 `유동적`으로 레이아웃 구조가 바뀌며 사용자에게 제공된다.

```html
<!-- 유동형 레이아웃 예시 -->
<head>
    <style>
        div {
            height: 50px;
            float: left;
        }
        /* 100px 이상일 때 */
        @media screen and (min-width:100px){
            div {
                height: 100px;
            }
            #layout_1{
                width: 30%;
                background-color: green;
            }

            #layout_2{
                margin-left: 5%;
                width: 45%;
                background-color: blue;
            }
            
            #layout_1{
                margin-left: 5%;
                width: 30%;
                background-color: red;
            }
        }
        /* 100px 이하일 때 */
        @media screen and (max-width:100px){
            #layout_1{
                width: 30%;
                background-color: green;
            }

            #layout_2{
                margin-left: 5%;
                width: 65%;
                background-color: blue;
            }
            
            #layout_1{
                margin-top: 5%;
                width: 100%;
                background-color: red;
            }
        }
    </style>
</head>
<body>
    <div id="layout_1"></div>
    <div id="layout_2"></div>
    <div id="layout_3"></div>
</body>
```
### 유동형 레이아웃 5가지 패턴

1. Mostly Fluid
    - 가장 작은 화면을 제외한 대부분 다른 작은 화면에서는 유동형 그리드와 유동형 이미지를 사용하여 레이아웃을 그대로 유지한다.
    - 가장 작은 화면에서는 수직으로 컬럼을 세우는 구조를 가진다.

2. Column Drop
    - 화면이 작아짐에 따라 부차적인 컬럼을 아래로 떨어뜨리는 방법을 쓰는 패턴이다.
    - 대부분의 컬럼 폭은 화면 크기가 달라져도 변함이 별로 없다.

3. Layout Shifter
    - 다양한 기기에 따라 각기 다른 레이아웃을 보여준다.
    - 혁신적인 디자인을 담을 수 있다.
    - 복잡하고 많은 작업이 필요하다.

4. Tiny Tweaks
    - 하나의 컬럼을 사용하는 패턴이다.
    - 변화의 폭이 크지않다.
    - 글 내용을 중시하는 웹에서 많이 쓰인다.

5. Off Canvas
    - 큰 화면에서는 모든 컬럼들을 보여주고 작은 화면에서는 하나의 메인 컬럼을 보여주며 다른 부가적인 컬럼들을 화면 밖에 숨겨놓는 패턴이다.
    - 숨겨져 있는 다른 컬럼은 필요할 때만 접근하도록 한다.
        - ex) 페이스북

## 유연한 이미지(Flexible Images)

- 모든 화면에서 볼 수 있게 화면 폭보다 큰 이미지를 다운 받고 이미지의 스타일 값 max-width를 100%로, height를 auto로 설정하는 방법이다.
- 단순히 이미지를 화면 폭에 맞게 가로/세로 길이를 줄였다 늘였다하는 방법으로 유연한 이미지가 완성된다.
- 이미지 뿐 아니라 대부분의 비디오에도 적용이 가능합니다.
- IE 구버전에서는 지원하지 않아 max-width가 아닌 width를 100%로 주는 방법으로 사용됩니다.

```html
<html>
    <head>
        <style>
            img {
                max-width: 100%;
                height: auto;
            }
        </style>
    </head>
    <body>
        <img alt="이미지" src="jesso-140329-CSS-01.png">
    </body>
</html>
```

# 반응형 크기

## Absolute
- px 모니터 위에서 화면에 나타낼 수 있는 가장 작은 단위
    - container의 사이즈가 변경되어도 유지된다.
    - 사용자가 font-size를 변경해도 변하지 않는다.
    - 
## Relative
- em
    - relative to parent element
    - 부모의 폰트 사이즈에 상대적으로 지정된다.
    - 부모의 폰트 사이즈에 곱한 값으로 계산이된다.

- rem 
    - relative to root element
    - 루트의 폰트 사이즈에 상대적으로 지정된다.
    - 루트의 폰트 사이즈에 곱한 값으로 계산이된다.

- vw 
    - viewport width
    - 브라우저의 너비
    - 100vw : view의 100%를 사용한다.

- vh 
    - viewport height
    - 브라우저의 높이

- % 
    - 부모요소에 상대적으로 크기가 계산된다.