# Colors

<card>

  ## Default Colors

  vuedax has the main colors that are maintained throughout the application to facilitate change and effective operation

  The main colors can be changed and customized to the taste of each developer for a more personalized application

  Default colors:

  - primary
  - success
  - danger
  - warn
  - dark

  <colors-default />

</card>

<card>

  ## Customize Theme Colors

  You can change the colors as you want and at any time, vuedax uses native css variables which means you can access them and change them whenever you want

  equal vuedax gives you several ways to change the main colors either by css or javascript

</card>

<card>

  ## javascript

  ```js
    Vue.use(vuedax, {
      colors: {
        primary:'#195BFF',
        success:'rgb(18, 237, 42)',
        danger:'rgb(230, 22, 68)',
        warning:'rgb(255, 110, 20)',
        dark:'rgb(24, 23, 44)'
      }
    })
  ```

</card>

<card>

  ## css

  You can change the vuedax variables by means of css like any other css variable

  ::: warning HEX Format Numbers Only

  It is important that the colors are in HEX format and only the numerical value for example: `rgb (150,100,50)` is equivalent to `150,100,50`

  :::

  ```css
    :root {
      --vs-primary: 148, 16, 146
      --vs-success: 18, 237, 42
      --vs-danger: 230, 22, 68
      --vs-warn: 255, 110, 20
      --vs-dark: 24, 23, 44
    }
  ```

</card>

<card>

  ## VD Function

  You can change the main colors at any point of your application but only on the client side with the existence of the `document object` with the function of vuedax` $ vd. setColor`

  ::: warning

  You can only use this function when you can obtain the document object, for example it cannot be used in the `created ()` of vuejs since the document and the elements are not yet rendered

  :::

  ```html

    <script>
      export default defineComponent({
        mounted() {
          this.$vd.setColor('primary', '#E95793')
        }
      })
    </script>

  ```

</card>

