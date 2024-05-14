---
PROPS:
  - name: color
    type: String
    values: primary, success, danger, warning, dark, RGB, HEX
    description: Change the color of the component and some of its sub components.
    default: primary
    link: /api/color
    usage: '#color'
    code: >
            <vd-button
              color="success"
            >
              Success
            </vd-button>
  # _______________________________________
  - name: style button
    type: Prop
    values: flat, border, gradient, transparent, dashed, shadow, relief, floating
    description: Change the style of the component and its states.
    default: null
    link: null
    usage: '#flat'
    code: >
            <vd-button
              flat
              >
              Flat
            </vd-button>
  # _______________________________________
  - name: active
    type: Boolean
    values: true, false
    description: Determine if the component is active and change its style to that state.
    default: false
    link: null
    usage: '#default'
    code: >
            <vd-button active >
              Default
            </vd-button>
  # _______________________________________
  - name: upload
    type: Boolean
    values: true, false
    description: Determine if the component has the upload status active by changing the style and adding the animation.
    default: false
    link: null
    usage: '#upload'
    code: >
            <vd-button upload >
              <i class='bx bxs-wallet'></i> Wallet
            </vd-button>
  # _______________________________________
  - name: to
    type: String
    values: url - vue-router
    description: Add the functionality of vue-router to the button, clicking it will redirect to the last route.
    default: false
    link: null
    usage: '#to-href'
    code: >
            <vd-button to="/" >
              Example prop - to
            </vd-button>
  # _______________________________________
  - name: href
    type: String
    values: href - link
    description: Add an href of an external link to add the functionality by clicking on the component.
    default: false
    link: null
    usage: '#to-href'
    code: >
            <vd-button href="https://lusaxweb.github.io/vuesax/" >
              Example prop - url
            </vd-button>
  # _______________________________________
  - name: blank
    type: Boolean
    values: true, false
    description: as in an html element `a` determines whether a new window is opened or the current one is replaced.
    default: false
    link: null
    usage: '#to-href'
    code: >
            <vd-button blank href="https://lusaxweb.github.io/vuesax/" >
              Example prop - url
            </vd-button>
  # _______________________________________
  - name: icon
    type: Boolean
    values: true, false
    description: Determine if the component contains only one icon, by adding this property the component has an equal width and height.
    default: false
    link: null
    usage: '#icon'
    code: >
            <vd-button icon >
              <i class='bx bx-home-alt'></i>
            </vd-button>
  # _______________________________________
  - name: circle
    type: Boolean
    values: true, false
    description: Change the border radius to give a circle style.
    default: false
    link: null
    usage: '#circle'
    code: >
            <vd-button icon circle >
              <i class='bx bx-home-alt'></i>
            </vd-button>
  # _______________________________________
  - name: square
    type: Boolean
    values: true, false
    description: Change the border radius to give a rectangle style.
    default: false
    link: null
    usage: '#square'
    code: >
            <vd-button icon square > // <------
              <i class='bx bx-home-alt'></i>
            </vd-button>
  # _______________________________________
  - name: block
    type: Boolean
    values: true, false
    description: Change the width of the component to the possible total determined by the parent element.
    default: false
    link: null
    usage: '#block'
    code: >
            <vd-button block >
              <i class='bx bxs-paint-roll' ></i> Edit Theme
            </vd-button>
  # _______________________________________
  - name: animationType
    type: Boolean
    values: true, false
    description: Change the type of animation, this property only works if you have the <code> slot </code> animate.
    default: false
    link: null
    usage: '#animate'
    code: >
            <vd-button flat color="success" animation-type="vertical" >
              Message
              <template v-slot:animate >
                <i class='bx bx-mail-send' ></i> Send
              </template>
            </vd-button>
  # _______________________________________
  - name: animateInactive
    type: Boolean
    values: true, false
    description: Determine if the animation is active for the user when hovering.
    default: false
    link: null
    usage: '#toggle'
    code: >
            <vd-button :animate-inactive="successFace" @click="handleClickFace" :loading="loadingFace" color="facebook">
              <i class='bx bxl-facebook-square' ></i>
              {{ successFace ? 'Logout' : 'Facebook' }}
              <template v-slot:animate >
                <i class='bx bx-user' ></i> Login
              </template>
            </vd-button>
  # _______________________________________
SLOTS:
  - name: animate
    type: slot
    values: null
    description: Slot To add the element that will be displayed in the animation.
    default: null
    link: null
    code: >
          <vd-button >
            Home
            <template v-slot:animate >
              <i class='bx bx-home-alt' ></i>
            </template>
          </vd-button>
    usage: '#animated'
  # _______________________________________
NEWS:
  - loading
  - upload
  - block
  - animate
  - floating
  - social
  - group
  - toggle
  - to-href
---

# Button

<card codesandbox="https://codesandbox.io/p/sandbox/solitary-framework-ww9m5q?file=%2Fsrc%2FApp.vue">

## Default

<docs-warn />

The buttons are a fundamental part of any project, with vuedax you can add a great button with a single line of code

the buttons have all the states as active, focus, hover, to make its implementation simpler and speed up the work

<div slot="example">
  <button-default />
</div>

<div slot="template">

  ```html
    <template>
      <div>
        <vd-button
          :active="active == 0"
          @click="active = 0"
        >
          Active
        </vd-button>
        <vd-button
          :active="active == 1"
          @click="active = 1"
        >
          Default
        </vd-button>
        <vd-button disabled >Disabled</vd-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      import { defineComponent } from 'vue';
      export default defineComponent({
        data: () => ({
          active: 0
        })
      })
    </script>
  ```

</div>

</card>

<card codesandbox="https://codesandbox.io/embed/charming-maxwell-ms0xf?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue&theme=dark">

## Flat

You can change the full style towards *flat* of a button with the `flat` property that its value is a` boolean`, so just adding it will change the styles

<div slot="example">
  <button-flat />
</div>

<div slot="template">

  ```html{4}
    <template>
      <div class="center">
        <vd-button
          flat
          :active="active == 0"
          @click="active = 0"
        >
          Active
        </vd-button>
        <vd-button
          flat
          :active="active == 1"
          @click="active = 1"
        >
          Default
        </vd-button>
        <vd-button
          flat
          disabled
        >
          Disabled
        </vd-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</div>

</card>

<card codesandbox="https://codesandbox.io/embed/vuesax-button-border-zc0td?fontsize=14&hidenavigation=1&theme=dark">

## Border

You can change the full style towards *border* of a button with the `border` property that its value is a` boolean` so just adding it will change the styles

<div slot="example">
  <button-border />
</div>

<div slot="template">

  ```html{4}
    <template>
      <div class="center">
        <vd-button
          border
          :active="active == 0"
          @click="active = 0"
        >
          Active
        </vd-button>
        <vd-button
          border
          :active="active == 1"
          @click="active = 1"
        >
          Default
        </vd-button>
        <vd-button
          border
          disabled
        >
          Disabled
        </vd-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</div>

</card>

<card codesandbox="https://codesandbox.io/embed/vuesax-button-gradient-7en0i?fontsize=14&hidenavigation=1&theme=dark">

## Gradient

You can change the full style towards *Gradient* of a button with the `gradient` property that its value is a` boolean`, so just adding it will change the styles

:::tip Gradient Auto Color
  Gradient colors are automatically generated by the `color` property which in this example is the` primary` color
:::

<div slot="example">
  <button-gradient />
</div>

<div slot="template">

  ```html{4}
    <template>
      <div>
        <vd-button
          gradient
          :active="active == 0"
          @click="active = 0"
        >
          Active
        </vd-button>
        <vd-button
          gradient
          :active="active == 1"
          @click="active = 1"
        >
          Default
        </vd-button>
        <vd-button
          gradient
          disabled
        >
          Disabled
        </vd-button>
      </div>
    </template>
  ```

</div>


<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</div>

</card>

<card codesandbox="https://codesandbox.io/embed/vuesax-button-relief-7dfh7?fontsize=14&hidenavigation=1&theme=dark">

## Relief

Change the style of the button to a relief aspect with the `relief` property, the property is a` boolean` so you can add it without any value.

<div slot="example">
  <button-relief />
</div>

<div slot="template">

  ```html{4}
    <template>
      <div>
        <vd-button
          relief
          :active="active == 0"
          @click="active = 0"
        >
          Active
        </vd-button>
        <vd-button
          relief
          :active="active == 1"
          @click="active = 1"
        >
          Default
        </vd-button>
        <vd-button
          relief
          disabled
        >
          Disabled
        </vd-button>
      </div>
    </template>
  ```

</div>


<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</div>

</card>

<card codesandbox="https://codesandbox.io/embed/vuesax-button-transparent-4t6d6?fontsize=14&hidenavigation=1&theme=dark">

## Transparent

Change the style of the button with the `transparent` property, the property is a` boolean` so you can add it without any value.

<div slot="example">
  <button-transparent />
</div>

<div slot="template">

  ```html{4}
    <template>
      <div>
        <vd-button
          transparent
          :active="active == 0"
          @click="active = 0"
        >
          Active
        </vd-button>
        <vd-button
          transparent
          :active="active == 1"
          @click="active = 1"
        >
          Default
        </vd-button>
        <vd-button
          transparent
          disabled
        >
          Disabled
        </vd-button>
      </div>
    </template>
  ```

</div>


<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</div>


</card>

<card codesandbox="https://codesandbox.io/embed/vuesax-button-shadow-ufx6y?fontsize=14&hidenavigation=1&theme=dark">

## Shadow

Change the style of the button with the `shadow` property, the property is a` boolean` so you can add it without any value.

<div slot="example">
  <button-shadow />
</div>

<div slot="template">

  ```html{4}
    <template>
      <div>
        <vd-button
          shadow
          :active="active == 0"
          @click="active = 0"
        >
          Active
        </vd-button>
        <vd-button
          shadow
          :active="active == 1"
          @click="active = 1"
        >
          Default
        </vd-button>
        <vd-button
          shadow
          disabled
        >
          Disabled
        </vd-button>
      </div>
    </template>
  ```

</div>


<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</div>


</card>

<card codesandbox="https://codesandbox.io/embed/vuesax-button-colors-gje98?fontsize=14&hidenavigation=1&theme=dark">

## Color

Change the color of the Button component with the `color` property and the color value for example (**#fff**, **rgba (100,10,5)** or the **main colors of vuesax**), this will only affect the component and its value can be dynamic

<utils-color />

<div slot="example">
  <button-color />
</div>

<div slot="template">

  ```html{10}
    <template>
      <div class="center">
        <vd-button
          :active="active == 0"
          @click="active = 0"
        >
          Default
        </vd-button>
        <vd-button
          success
          flat
          :active="active == 1"
          @click="active = 1"
        >
          Success
        </vd-button>
        <vd-button
          danger
          border
          :active="active == 2"
          @click="active = 2"
        >
          Danger
        </vd-button>
        <vd-button
          warn
          gradient
          :active="active == 3"
          @click="active = 3"
        >
          Warn
        </vd-button>
        <vd-button
          dark
          shadow
          :active="active == 4"
          @click="active = 4"
        >
          Dark
        </vd-button>
        <vd-button
          color="#7d33ff"
          relief
          :active="active == 5"
          @click="active = 5"
        >
            HEX
        </vd-button>
        <vd-button
          color="rgb(59,222,200)"
          gradient
          :active="active == 6"
          @click="active = 6"
        >
          RGB
        </vd-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Icon

If you need an icon-only button use the `icon` property, the property is a` boolean` so you can add it without any value.

This property makes the button have a specific size making it the same width and height, do not use when it is icon and text

<utils-icon />

<div slot="example">
  <button-icon />
</div>

<div slot="template">

  ```html{4}
    <template>
      <div class="center">
        <vd-button
          icon
          :active="active == 0"
          @click="active = 0"
        >
          <i class='bx bx-home-alt'></i>
        </vd-button>

        <vd-button
          icon
          color="success"
          flat
          :active="active == 1"
          @click="active = 1"
        >
          <i class='bx bxs-phone-call' ></i>
        </vd-button>

        <vd-button
          icon
          color="danger"
          border
          :active="active == 2"
          @click="active = 2"
        >
          <i class='bx bxs-heart' ></i>
        </vd-button>

        <vd-button
          icon
          color="warn"
          gradient
          :active="active == 3" @click="active = 3"
        >
          <i class='bx bxs-bell-ring' ></i>
        </vd-button>

        <vd-button
          icon
          color="#7d33ff"
          relief
          :active="active == 5"
          @click="active = 5"
        >
          <i class='bx bxs-paper-plane' ></i>
        </vd-button>

        <vd-button
          icon
          color="rgb(59,222,200)"
          gradient
          :active="active == 6"
          @click="active = 6"
        >
          <i class='bx bxs-purchase-tag' ></i>
        </vd-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Icon - Text

If you need a button with text and icon you can do them by adding them in the `slot` default.

<div slot="example">
  <button-iconText />
</div>

<div slot="template">

  ```html{7}
    <template>
      <div class="center">
        <vd-button
          :active="active == 0"
          @click="active = 0"
        >
          <i class="bx bx-home-alt"></i> Home
        </vd-button>

        <vd-button
          success
          flat
          :active="active == 1"
          @click="active = 1"
        >
          <i class="bx bxs-phone-call"></i> Call
        </vd-button>

        <vd-button
          danger
          border
          :active="active == 2"
          @click="active = 2"
        >
          <i class="bx bxs-heart"></i> Like
        </vd-button>

        <vd-button
          warn
          gradient
          :active="active == 3"
          @click="active = 3"
        >
          <i class="bx bxs-bell-ring"></i> Notifications
        </vd-button>

        <vd-button
          color="#7d33ff"
          relief
          :active="active == 5"
          @click="active = 5"
        >
          <i class="bx bxs-paper-plane"></i> Send
        </vd-button>

        <vd-button
          color="rgb(59,222,200)"
          gradient
          :active="active == 6"
          @click="active = 6"
        >
          <i class="bx bxs-purchase-tag"></i> Save
        </vd-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Circle

You can completely round the corners with the `circle` property, the property is a` boolean` so you can add it without any value.

<div slot="example">
  <button-circle />
</div>

<div slot="template">

  ```html{4}
    <template>
      <div class="center">
        <vd-button
          circle
          :active="active == 0"
          @click="active = 0"
        >
          Home
        </vd-button>

        <vd-button
          circle
          icon
          success
          flat
          :active="active == 1"
          @click="active = 1"
        >
          <i class="bx bxs-phone-call"></i>
        </vd-button>

        <vd-button
          circle
          danger
          border
          :active="active == 2"
          @click="active = 2"
        >
          <i class="bx bxs-heart"></i> Like
        </vd-button>

        <vd-button
          circle
          color="warn"
          gradient
          :active="active == 3"
          @click="active = 3"
        >
          Notifications <i class="bx bxs-bell-ring"></i>
        </vd-button>

        <vd-button
          circle
          icon
          color="#7d33ff"
          relief
          :active="active == 5"
          @click="active = 5"
        >
          <i class="bx bxs-paper-plane"></i>
        </vd-button>

        <vd-button
          circle
          icon
          color="rgb(59,222,200)"
          gradient
          :active="active == 6"
          @click="active = 6"
        >
          <i class="bx bxs-purchase-tag"></i>
        </vd-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Square

You can make all the corners completely straight with the `Square` property, the property is a` boolean` so you can add it without any value.

<div slot="example">
  <button-square />
</div>

<div slot="template">

  ```html{4}
    <template>
      <div class="center">
        <vd-button
          square
          :active="active == 0"
          @click="active = 0"
        >
          Home
        </vd-button>

        <vd-button
          square
          icon
          success
          flat
          :active="active == 1" @click="active = 1"
        >
          <i class="bx bxs-phone-call"></i>
        </vd-button>

        <vd-button
          square
          danger
          border
          :active="active == 2"
          @click="active = 2"
        >
          <i class="bx bxs-heart"></i> Like
        </vd-button>

        <vd-button
          square
          warn
          gradient
          :active="active == 3"
          @click="active = 3"
        >
          Notifications <i class="bx bxs-bell-ring"></i>
        </vd-button>
        <vd-button
          square
          icon
          color="#7d33ff"
          relief
          :active="active == 5"
          @click="active = 5"
        >
          <i class="bx bxs-paper-plane"></i>
        </vd-button>
        <vd-button
          square
          icon
          color="rgb(59,222,200)"
          gradient
          :active="active == 6"
          @click="active = 6"
        >
          <i class="bx bxs-purchase-tag"></i>
        </vd-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Size

Change the size of the entire button including padding, font-size and border with the `size` property

values:
  - xl
  - l
  - default
  - small
  - mini

<div slot="example">
  <button-size />
</div>

<div slot="template">

  ```html{4}
    <template>
      <div class="center">
        <vd-button
          size="xl"
          :active="active == 0"
          @click="active = 0"
        >
          XLarge
        </vd-button>
        <vd-button
          size="large"
          :active="active == 1"
          @click="active = 1"
        >
          Large
        </vd-button>
        <vd-button
          :active="active == 2"
          @click="active = 2"
        >
          Default
        </vd-button>
        <vd-button
          size="small"
          :active="active == 3"
          @click="active = 3"
        >
          Small
        </vd-button>
        <vd-button
          size="mini"
          :active="active == 4"
          @click="active = 4"
        >
          Mini
        </vd-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Loading <Badge text="New"/>

Now you can add a loading status with the `loading` property, the property is a` boolean` so you can add it without any value.

<div slot="example">
  <button-loading />
</div>

<div slot="template">

  ```html{4}
    <template>
      <div class="center">
        <vd-button
          loading
          :active="active == 0"
          @click="active = 0"
        >
          Home
        </vd-button>

        <vd-button
          loading
          icon
          success
          flat
          :active="active == 1"
          @click="active = 1"
        >
          <i class="bx bxs-phone-call"></i>
        </vd-button>

        <vd-button
          loading
          danger
          border
          :active="active == 2"
          @click="active = 2"
        >
          <i class="bx bxs-heart"></i> Like
        </vd-button>

        <vd-button
          loading
          warn
          gradient
          :active="active == 3"
          @click="active = 3"
        >
          Notifications <i class="bx bxs-bell-ring"></i>
        </vd-button>

        <vd-button
          loading
          icon
          color="#7d33ff"
          relief
          :active="active == 5"
          @click="active = 5"
        >
          <i class="bx bxs-paper-plane"></i>
        </vd-button>
        <vd-button
          loading
          icon
          color="rgb(59,222,200)"
          gradient
          :active="active == 6"
          @click="active = 6"
        >
          <i class="bx bxs-purchase-tag"></i>
        </vd-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Upload <Badge text="New"/>

Now you can add a status of sending or uploading data to the server with the `upload` property, the property is a` boolean` so you can add it without any value.

<div slot="example">
  <button-upload />
</div>

<div slot="template">

  ```html{4}
    <template>
      <div class="center">
        <vd-button
          upload
          :active="active == 0"
          @click="active = 0"
        >
          Home
        </vd-button>

        <vd-button
          upload
          icon
          color="success"
          flat
          :active="active == 1"
          @click="active = 1"
        >
          <i class="bx bxs-phone-call"></i>
        </vd-button>

        <vd-button
          upload
          color="danger"
          border
          :active="active == 2"
          @click="active = 2"
        >
          <i class="bx bxs-heart"></i> Like
        </vd-button>

        <vd-button
          upload
          color="warn"
          gradient
          :active="active == 3"
          @click="active = 3"
        >
          Notifications <i class="bx bxs-bell-ring"></i>
        </vd-button>

        <vd-button
          upload
          color="dark"
          transparent
          :active="active == 5"
          @click="active = 5"
        >
          Dark
        </vd-button>

        <vd-button
          upload
          icon
          color="#7d33ff"
          relief
          :active="active == 5"
          @click="active = 5"
        >
          <i class="bx bxs-paper-plane"></i>
        </vd-button>

        <vd-button
          upload
          icon
          color="rgb(59,222,200)"
          gradient
          :active="active == 6"
          @click="active = 6"
        >
          <i class="bx bxs-purchase-tag"></i>
        </vd-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Block <Badge text="New"/>

You can make the button have the full width allowed with the `block` property, the property is a` boolean` so you can add it without any value.

<div slot="example">
  <button-block />
</div>

<div slot="template">

  ```html{4}
    <template>
      <div class="center">
        <vd-button
          block
        >
          <i class='bx bxs-paint-roll' ></i> Edit Theme
        </vd-button>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Animate <Badge text="New"/>

You can create an animation to the component by adding the ``slot="animate" `and the content will be the one that appears when the component is animated

You can also change the type of animation with the `animation-type` property and the allowed values ​​are (` vertical`, `scale`,` rotate`)

<div slot="example">
  <button-animate />
</div>

<div slot="template">

  ```html{5,6,7}
    <template>
      <div class="center">
        <vd-button>
          Home
          <template #animate >
            <i class='bx bx-home-alt' ></i>
          </template>
        </vd-button>

        <vd-button
          flat
          success
          animation-type="vertical"
        >
          Message
          <template #animate >
            <i class='bx bx-mail-send' ></i> Send
          </template>
        </vd-button>

        <vd-button
          gradient
          style="min-width: 60px"
          warn
          animation-type="scale"
        >
          <i class='bx bxs-shopping-bag' ></i>
          <template #animate >
            Store
          </template>
        </vd-button>

        <vd-button
          icon
          relief
          danger
          animation-type="rotate"
        >
          <i class='bx bx-like'></i>
          <template #animate >
            <i class='bx bxs-like' ></i>
          </template>
        </vd-button>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Social <Badge text="New"/>

Using the colors of social networks is very common in a project either a login button or a share button so Vuesax makes it easy for you to search for each color and just by putting the name of the network you already change the whole style of the component

Supported colors: (`facebook`, `twitter`, `youtube`, `pinterest`, `linkedin`, `snapchat`, `whatsapp`, `tumblr`, `reddit`, `spotify`, `amazon`, `medium`, `vimeo`, `skype`, `dribbble`, `slack`, `yahoo`, `twitch`, `discord`, `telegram`, `google-plus`, `messenger`)

<div slot="example">
  <button-social />
</div>

<div slot="template">

  ```html{5}
    <template>
      <div class="center">
        <vd-button
          icon
          color="facebook"
        >
          <i class='bx bxl-facebook-square'></i>
        </vd-button>

        <vd-button
          icon
          color="twitter"
        >
          <i class='bx bxl-twitter'></i>
        </vd-button>

        <vd-button
          icon
          color="youtube"
        >
          <i class='bx bxl-youtube'></i>
        </vd-button>

        <vd-button
          icon
          color="linkedin"
        >
          <i class='bx bxl-linkedin'></i>
        </vd-button>

        <vd-button
          icon
          color="whatsapp"
        >
          <i class='bx bxl-whatsapp'></i>
        </vd-button>

        <vd-button
          icon
          color="twitch"
        >
          <i class='bx bxl-twitch'></i>
        </vd-button>

        <vd-button
          icon
          color="medium"
        >
          <i class='bx bxl-medium'></i>
        </vd-button>

        <vd-button
          icon
          color="skype"
        >
          <i class='bx bxl-skype'></i>
        </vd-button>

        <vd-button
          icon
          color="slack"
        >
          <i class='bx bxl-slack-old'></i>
        </vd-button>

        <vd-button
          icon
          color="messenger"
        >
          <i class='bx bxl-messenger'></i>
        </vd-button>

        <vd-button
          icon
          color="tumblr"
        >
          <i class='bx bxl-tumblr'></i>
        </vd-button>

        <vd-button
          icon
          color="dribbble"
        >
          <i class='bx bxl-dribbble'></i>
        </vd-button>

        <vd-button
          icon
          color="google-plu
        s">
          <i class='bx bxl-google-plus'></i>
        </vd-button>

        <vd-button
          icon
          color="vimeo"
        >
          <i class='bx bxl-vimeo'></i>
        </vd-button>

        <vd-button
          icon
          color="pinterest"
        >
          <i class='bx bxl-pinterest'></i>
        </vd-button>

        <vd-button
          icon
          color="spotify"
        >
          <i class='bx bxl-spotify'></i>
        </vd-button>

        <vd-button
          icon
          color="discord"
        >
          <i class='bx bxl-discord'></i>
        </vd-button>

        <vd-button
          icon
          color="amazon"
        >
          <i class='bx bxl-amazon'></i>
        </vd-button>

        <vd-button
          icon
          color="reddit"
        >
          <i class='bx bxl-reddit'></i>
        </vd-button>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Floating <Badge text="New"/>

You can make a float style button easily with the `Floating` property, the property is a` boolean` so you can add it without any value.

these buttons usually do an important action in specific and go with a fixed position in the lower corner

<div slot="example">
  <button-floating />
</div>

<div slot="template">

  ```html{6}
    <template>
      <div class="center">
        <vd-button
          circle
          icon
          floating
        >
          <i class='bx bx-plus' ></i>
        </vd-button>

        <vd-button
          color="whatsapp"
          circle
          icon
          floating
        >
          <i class='bx bxl-whatsapp' ></i>
        </vd-button>

        <vd-button
          color="#ff3e4e"
          circle
          icon
          floating
        >
          <i class='bx bx-up-arrow-alt' ></i>
        </vd-button>

        <vd-button
          circle
          icon
          disabled
          floating
        >
          <i class='bx bxs-chat' ></i>
        </vd-button>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Group <Badge text="New"/>

If you need to make a group of buttons you can use the **sub-component** `<vd-button-group> </vd-button-group>` and inside the default slot put the buttons you want to group

<div slot="example">
  <button-group />
</div>

<div slot="template">

  ```html{3,16}
    <template>
      <div class="center">
        <vd-button-group>
          <vd-button>
            One
          </vd-button>
          <vd-button>
            Two
          </vd-button>
          <vd-button>
            Three
          </vd-button>
          <vd-button>
            four
          </vd-button>
        </vd-button-group>

        <span class="divider" />

        <vd-button-group>
          <vd-button flat icon>
            <i class='bx bx-play' ></i>
          </vd-button>
          <vd-button flat icon>
            <i class='bx bx-pause' ></i>
          </vd-button>
          <vd-button flat icon>
            <i class='bx bx-fast-forward' ></i>
          </vd-button>
          <vd-button flat icon>
            <i class='bx bx-shuffle' ></i>
          </vd-button>
        </vd-button-group>

        <span class="divider" />

        <vd-button-group>
          <vd-button border>
            <i class='bx bxs-pencil' ></i> Edit
          </vd-button>
          <vd-button border icon>
            <i class='bx bx-font-color' ></i>
          </vd-button>
          <vd-button border icon>
            <i class='bx bx-align-middle' ></i>
          </vd-button>
          <vd-button border>
            <i class='bx bx-font-size' ></i> Font size
          </vd-button>
        </vd-button-group>

        <span class="divider" />

        <vd-button-group>
          <vd-button relief>
            <i class='bx bx-home-alt' ></i> Home
          </vd-button>
          <vd-button relief>
            <i class='bx bxs-phone-call' ></i> Contact
          </vd-button>
          <vd-button relief loading>
            <i class='bx bxs-cart-alt' ></i> Products
          </vd-button>
          <vd-button relief upload>
            <i class='bx bxs-envelope' ></i> Send
          </vd-button>
        </vd-button-group>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Toggle <Badge text="New"/>

This is an example of what you can achieve with simple logic and few lines of code.

<div slot="example">
  <button-toggle />
</div>

<div slot="template">

  ```html
    <template>
      <div class="center">
        <vd-button
          @click="handleClick"
          :icon="success"
          :upload="sending"
          :color="success ? 'success' : 'primary'"
        >
          <span v-if="!success">
            <i class='bx bx-mail-send' ></i>
              Send
          </span>

          <i class='bx bx-check' v-else ></i>
        </vd-button>

        <vd-button
          :animate-inactive="successFace"
          @click="handleClickFace"
          :loading="loadingFace"
          color="facebook"
        >
          <i class='bx bxl-facebook-square' ></i>
          {{ successFace ? 'Logout' : 'Facebook' }}
          <template #animate >
            <i class='bx bx-user' ></i> Login
          </template>
        </vd-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          sending: false,
          success: false,

          loadingFace: false,
          successFace: false
        }),
        methods:{
          handleClick() {
            this.sending = true

            setTimeout(() => {
              this.sending = false
              this.success = !this.success
            }, 2000);
          },
          handleClickFace() {
            this.loadingFace = true

            setTimeout(() => {
              this.loadingFace = false
              this.successFace = !this.successFace
            }, 2000);
          }
        }
      }
    </script>
  ```

</div>

<div slot="style">

  ```html
    <style scoped lang="stylus">
      span
        display flex
        align-items center
        justify-content center
      i.bx:not(.bx-check)
        padding-right 5px
        font-size 1.1rem
    </style>
  ```

</div>

</card>

<card>

## To - href <Badge text="New"/>

If you need to use a button such as a vue-router link or an external link you can do it with the properties (`to`: vue-router link) or (` href`: html external link)

<div slot="example">
  <button-toHref />
</div>

<div slot="template">

  ```html
    <template>
      <div class="center">
        <vd-button
          to="/"
          flat
          >
          To - vue-router
        </vd-button>
        <vd-button
          href="http://vuesax.com/"
          success
          flat
        >
          Href - Replace Url
        </vd-button>
        <vd-button
          href="http://vuesax.com/"
          blank
          danger
          flat
        >
          Href - Open External (blank)
        </vd-button>
      </div>
    </template>
  ```

</div>

</card>

<card>

  ## API

</card>

