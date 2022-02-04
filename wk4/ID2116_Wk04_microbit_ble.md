---
marp: true
headingDivider: 2
paginate: false
markdown.marp.enableHtml: true
size: 16:9
# header: ID2116 AY22 Wk3


style: |
  h1 {
    font-weight: 700;
    color: #020202;
  }


---
# AY2021 ID2116 Wk04:<br> micro:bit ↔ p5*js communication<br>Web BLE
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Nunito" />
<link rel="stylesheet" href="../css/slidetemplate.css">

![bg auto left:25%](https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2020-12-01/1536383585045_77e3ff5ae9fc37b361ef_132.png)

# [BLE] Bluetooth Communication with micro:bit



MicroBits have a bluetooth feature that allows wireless communication with laptops and mobile devices. p5.js also has a Web BLE feature that allows the browser to connect to the MicroBits for wireless communication. However, for security reasons, Web BLE is no longer available at editor.p5js.org.


So here is a way to run Web Ble in p5.js with a more powerfull site for Web Developers called Glitch.

## Introduction of Glitch



<iframe style="width:1080px; height:720px; position:static; margin-left:25px;" src="https://docs.google.com/presentation/d/1_E8rKKY8ZMXCNDFWzaJ5eAxX-I_ZdUn3CGn_n578VMc/embed?start=false&loop=false&delayms=3000" frameborder="0" width="1200" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>


## Three ways to use micro:bit’s bluetooth function.
 https://makecode.microbit.org/reference/bluetooth

- Bluetooth UART (Serial communication)
- Bluetooth Service (Direct access & control to micro:bit’s internal features)
    - microBit.js library https://antefact.github.io/microBit.js/
- Bluetooth Beacon
    - TraceTogether Token https://www.tracetogether.gov.sg/
    - estimote https://estimote.com/

## Bluetooth UART (Serial) Service

![bg h:600px right ](https://paper-attachments.dropbox.com/s_EA31771E711951B20C00D2E226C1EB5563480D07E4B4D3A947FC87C420AE3881_1581040947407_file.png) 
## Bluetooth Services
![bg right h:600px](https://paper-attachments.dropbox.com/s_EA31771E711951B20C00D2E226C1EB5563480D07E4B4D3A947FC87C420AE3881_1581041252227_file.png) 
## Bluetooth Beacon Service
![bg right:70% h:300px](https://paper-attachments.dropbox.com/s_EA31771E711951B20C00D2E226C1EB5563480D07E4B4D3A947FC87C420AE3881_1581041342455_file.png) 


## MakeCode Setup: Extensions → select bluetooth
To enable Bluetooth communication on the micro:bit click “Extentions” menu and select blutooth services.  


<!-- ![](https://paper-attachments.dropbox.com/s_EA31771E711951B20C00D2E226C1EB5563480D07E4B4D3A947FC87C420AE3881_1580928372833_Microsoft+MakeCode+for+micro+bit.png)
![](https://paper-attachments.dropbox.com/s_EA31771E711951B20C00D2E226C1EB5563480D07E4B4D3A947FC87C420AE3881_1580927592964_file.png) -->

<p float="left" style="margin:0 auto;">
  <img src="https://paper-attachments.dropbox.com/s_EA31771E711951B20C00D2E226C1EB5563480D07E4B4D3A947FC87C420AE3881_1580928372833_Microsoft+MakeCode+for+micro+bit.png" height="400px" />
  <img src="https://paper-attachments.dropbox.com/s_EA31771E711951B20C00D2E226C1EB5563480D07E4B4D3A947FC87C420AE3881_1580927592964_file.png" height="400px" /> 
</p>

**[SAD NEWS 😥] The Bluetooth library cannot be used in conjunction with the Neopixel or Radio libraries.**



## [BLE: micro:bit → p5*js]: Control video playback with micro:bit gesture.

micro:bit code: https://makecode.microbit.org/_M2oesTXdh0MH
Glitch code: https://glitch.com/edit/#!/ubit-ble-video-gesture
Glitch preview: https://ubit-ble-video-gesture.glitch.me

<!-- 
https://www.youtube.com/watch?v=mEeEzyQEegc& -->



## Step01: micro:bit gesture input code**
micro:bit code: https://makecode.microbit.org/_005Ew2M1y7Ws


![bg right h:400px](https://paper-attachments.dropbox.com/s_EA31771E711951B20C00D2E226C1EB5563480D07E4B4D3A947FC87C420AE3881_1581043974239_file.png) 

## Step02: [IMPORTANT]** 
**From the project settings in the makecode editor, set the Pairing Mode to "No Paring" so that the micro:bit can be connected in a browser.**

![](https://paper-attachments.dropbox.com/s_AB7F35483D6E6EA631555F22D997E77073B2BD679AA90C5B33750719AE83C966_1612469767310_Screenshot+2021-02-05+at+4.15.27+AM.png)

https://www.youtube.com/watch?v=_h5O4mcL8Qk&



## Step03: download and add microbit bluetooth library to Glitch. 

**microBit bluetooth library:** [microBit.js](https://www.dropbox.com/s/ax9z7p5sd4je3yt/microBit.js?dl=1)

3-1. Download the micro:bit bluetooth library
      [microBit.js](https://www.dropbox.com/s/ax9z7p5sd4je3yt/microBit.js?dl=1)

3-2. Remix the P5 Video Gesture project.
https://glitch.com/edit/#!/p-5-video-gesture
    
3-2. Upload “microBit.js” file to the sketch folder.

![bg right:30% h:300px](https://paper-attachments.dropbox.com/s_AB7F35483D6E6EA631555F22D997E77073B2BD679AA90C5B33750719AE83C966_1612471931230_image.png)


3-3. Add link to the script file in index.html
```html
<script src="./microBit.js"></script>
```

<!-- ![](https://paper-attachments.dropbox.com/s_AB7F35483D6E6EA631555F22D997E77073B2BD679AA90C5B33750719AE83C966_1612472102485_image.png) -->


## Step:04:  Add “Connect”/”Disconnect” Buttons to the sketch.js 

4-1. Declare button objects and set following callback functions.
    - connectBle : connect to the micro:bit BLE
    - disconnectBle : disconnect from the micro:bit BLE

```js
 //define connect and disconnect buttons
  const connectButton = createButton("Connect");
  connectButton.mousePressed(connectBle);

  const disconnectButton = createButton("Disconnect");
  disconnectButton.mousePressed(disconnectBle);
```
<!-- ![h:300px](https://paper-attachments.dropbox.com/s_AB7F35483D6E6EA631555F22D997E77073B2BD679AA90C5B33750719AE83C966_1612472341219_Screenshot+2021-02-05+at+4.57.02+AM.png) -->


## Step:05:  Add  handleBleData() function to handle incoming data from micro:bit**

<!-- ![h:500](https://paper-attachments.dropbox.com/s_AB7F35483D6E6EA631555F22D997E77073B2BD679AA90C5B33750719AE83C966_1612472452553_Screenshot+2021-02-05+at+5.00.26+AM.png)  -->

```js
//handleBleData event function will be called 
//when the bluetooth data is received.

function handleBleData(data) {
  
  let status = data;

  if (gestureStatus !== status) { //check if status is different from previous

    switch (status) {
      case "stable":
        print("Stable position to pause video.");
        video.pause();
        break;
      case "up":
        break;
      case "down":
        break;
      case "left":
        break;
      case "right":
        print("Tilt Right to play video.");
        video.play();
        break;
    }

    print("update:"+status);
    
    gestureStatus = status; //update the status
  }

}
```

<!-- The **data** variable contains a “string” value sent from microbit.    [**switch(status)**](https://www.w3schools.com/js/js_switch.asp) [statement](https://www.w3schools.com/js/js_switch.asp) selects which code to be executed based on the **status** value**.**   For example      if status value is  “stable” then call video.pause() to    pause the video playback.      if status value is “right” then call video.play() to      start the video playback.  Lastly, by setting **gestureStatus to the curren status value at line 75,**  if statement at line 55 can check it that the incoming status value is not the same as the previous status value. This prevents the same command from being executed multiple times in succession.  -->

<!-- ---

 **p5*js code: https://editor.p5js.org/didny/sketches/ezgKiL7g**                                                                     
<iframe allow="bluetooth" src="https://ubit-ble-video-gesture.glitch.me/"> </iframe> -->


## Step06:  connect & select your micro:bit’s **BLE ID**
https://ubit-ble-video-gesture.glitch.me/

Every micro:bit has an unique **BLE ID** (e.g **gupez**) to identify which micro:bit you are connecting to.  Look up your ID for a paper inside your micro:bit kit.

**List of BLE ID:** [DID micro:bit BLE ID list](https://docs.google.com/spreadsheets/d/1WZxlPx14i0HU1l4Y5BEP2u_ogdIJaN11ZAGaOXhLY30/edit?usp=sharing)

<!-- **How to pair micro:bit via BLE**

https://www.youtube.com/watch?v=SjQ9a7tTLgU& -->



## [BLE: micro:bit → p5*js]: Control Image Slideshow with micro:bit buttons

**micro:bit code:** https://makecode.microbit.org/_W5FPJkLF7aTJ
**Glitch code:** https://glitch.com/edit/#!/ubit-ble-photoframe

**Preview:** https://ubit-ble-photoframe.glitch.me
| **micro:bit code**                                                                                                                                                  | **p5.js code**                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| ![](https://paper-attachments.dropbox.com/s_AB7F35483D6E6EA631555F22D997E77073B2BD679AA90C5B33750719AE83C966_1612467930397_Screenshot+2021-02-05+at+3.45.19+AM.png) | ![](https://paper-attachments.dropbox.com/s_AB7F35483D6E6EA631555F22D997E77073B2BD679AA90C5B33750719AE83C966_1612473450332_image.png) |

