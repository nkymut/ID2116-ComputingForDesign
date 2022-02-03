

# [BLE] Bluetooth Communication with micro:bit
### micro:bit bluetooth blocks:  https://makecode.microbit.org/reference/bluetooth
## Three ways to use micro:bit’s bluetooth function.
- Bluetooth UART (Serial communication)
- Bluetooth Service (Direct access & control to micro:bit’s internal features)
    - microBit.js library https://antefact.github.io/microBit.js/
- Bluetooth Beacon
    - TraceTogether Token https://www.tracetogether.gov.sg/
    - estimote https://estimote.com/

## Bluetooth UART (Serial) Service

![bg h:600px right ](https://paper-attachments.dropbox.com/s_EA31771E711951B20C00D2E226C1EB5563480D07E4B4D3A947FC87C420AE3881_1581040947407_file.png) 
## Bluetooth Service
![bg right h:600px](https://paper-attachments.dropbox.com/s_EA31771E711951B20C00D2E226C1EB5563480D07E4B4D3A947FC87C420AE3881_1581041252227_file.png) 
## Bluetooth Beacon Service
![bg right:70% h:300px](https://paper-attachments.dropbox.com/s_EA31771E711951B20C00D2E226C1EB5563480D07E4B4D3A947FC87C420AE3881_1581041342455_file.png) 

## Serial Communication over Bluetooth
### Start Bluetooth Services and status callbacks  
 
###Create a BLE beacon e.g. https://estimote.com/                                                                                       |

## MakeCode Setup: Extensions → select bluetooth**
To enable Bluetooth communication on the micro:bit click “Extentions” menu and select blutooth services.  **[SAD NEWS 😥]The Bluetooth library cannot be used together with Neopixel library and Radio Library.**

![](https://paper-attachments.dropbox.com/s_EA31771E711951B20C00D2E226C1EB5563480D07E4B4D3A947FC87C420AE3881_1580928372833_Microsoft+MakeCode+for+micro+bit.png)
![](https://paper-attachments.dropbox.com/s_EA31771E711951B20C00D2E226C1EB5563480D07E4B4D3A947FC87C420AE3881_1580927592964_file.png)



## [BLE: micro:bit → p5*js]: Control video playback with micro:bit gesture.

**micro:bit code: https://makecode.microbit.org/_M2oesTXdh0MH**
**p5*JS code: https://editor.p5js.org/didny/sketches/** ****

https://www.youtube.com/watch?v=mEeEzyQEegc&

---

## Step01: micro:bit gesture input code**
micro:bit code: https://makecode.microbit.org/_M2oesTXdh0MH


![](https://paper-attachments.dropbox.com/s_EA31771E711951B20C00D2E226C1EB5563480D07E4B4D3A947FC87C420AE3881_1581043974239_file.png) 

## Step02: [IMPORTANT]** 
**Set Pairing Mode to “No Paring” to allow browser to connect micro:bit**

![](https://paper-attachments.dropbox.com/s_AB7F35483D6E6EA631555F22D997E77073B2BD679AA90C5B33750719AE83C966_1612469767310_Screenshot+2021-02-05+at+4.15.27+AM.png)

https://www.youtube.com/watch?v=_h5O4mcL8Qk&



## Step03: download and add microbit bluetooth library to the** [**videoPlayer example**](https://editor.p5js.org/didny/sketches/Cc24B9ClW)


**microBit bluetooth library:** [https://www.dropbox.com/s/oqeoa8f6oiov80g/microBit.js?dl=](https://www.dropbox.com/s/oqeoa8f6oiov80g/microBit.js?dl=0)1

3-1. Download the micro:bit micro:bit bluetooth library
      [https://www.dropbox.com/s/oqeoa8f6oiov80g/microBit.js?dl=](https://www.dropbox.com/s/oqeoa8f6oiov80g/microBit.js?dl=0)1
    
3-2. Upload “ubitwebusb.js” file to the sketch folder of the [videoPlayer example](https://editor.p5js.org/didny/sketches/Cc24B9ClW)
      **videoPlayer code: https://editor.p5js.org/didny/sketches/Cc24B9ClW**

![](https://paper-attachments.dropbox.com/s_AB7F35483D6E6EA631555F22D997E77073B2BD679AA90C5B33750719AE83C966_1612471931230_image.png)

    1-3. Add link to the library script in index.html
        1. Open **“index.html”** from Sketch Files:  and add following line above “sketch.js” link.
            <script src="./microBit.js"></script>
    
![](https://paper-attachments.dropbox.com/s_AB7F35483D6E6EA631555F22D997E77073B2BD679AA90C5B33750719AE83C966_1612472102485_image.png)


## Step:04:  Add “Connect”/”Disconnect” Buttons to the sketch.** 
4-0. Declare a global variable to store microbit device connection


    //variable to store microbit device connection
    let uBitDevice;

<!-- ## Step:04:  Add “Connect”/”Disconnect” Buttons to the sketch.**  -->
4-1. Declare button objects and set properties  

![h:300px](https://paper-attachments.dropbox.com/s_AB7F35483D6E6EA631555F22D997E77073B2BD679AA90C5B33750719AE83C966_1612472341219_Screenshot+2021-02-05+at+4.57.02+AM.png)


## Step:05:  Add  handleData() function to handle incoming data from micro:bit**

![h:500](https://paper-attachments.dropbox.com/s_AB7F35483D6E6EA631555F22D997E77073B2BD679AA90C5B33750719AE83C966_1612472452553_Screenshot+2021-02-05+at+5.00.26+AM.png) 

handleData function is called when the p5 sketch received data from microbit.   
---
<!-- The **status** variable contains a “string” value sent from microbit.    [**switch(status)**](https://www.w3schools.com/js/js_switch.asp) [statement](https://www.w3schools.com/js/js_switch.asp) selects which code to be executed based on the **status** value**.**   For example      if status value is  “stable” then call video.pause() to    pause the video playback.      if status value is “right” then call video.play() to      start the video playback.  Lastly, by setting **gestureStatus to the curren status value at line 75,**  if statement at line 55 can check it that the incoming status value is not the same as the previous status value. This prevents the same command from being executed multiple times in succession.  -->

 **p5*js code: https://editor.p5js.org/didny/sketches/ezgKiL7g**                                                                     



## handleData Function for Copy& Paste

```
//handleData function is called 
//when the bluetooth data is received.

function handleData(status) {
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

## Step06:  Run to  connect & select your micro:bit’s **BLE ID**
https://editor.p5js.org/didny/sketches/ezgKiL7g

Every micro:bit has an unique **BLE ID** (e.g **gupez**) to identify which micro:bit you are connecting to.  Look up your ID for a paper inside your micro:bit kit.

**How to pair micro:bit via BLE**

https://www.youtube.com/watch?v=SjQ9a7tTLgU&



## [BLE: micro:bit → p5*js]: Control Image Slideshow with micro:bit buttons

**micro:bit code: https://makecode.microbit.org/_W5FPJkLF7aTJ**
**p5*js code: https://editor.p5js.org/didny/sketches/dPoKE_6VP**

| **micro:bit code**                                                                                                                                                  | **p5.js code**                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| ![](https://paper-attachments.dropbox.com/s_AB7F35483D6E6EA631555F22D997E77073B2BD679AA90C5B33750719AE83C966_1612467930397_Screenshot+2021-02-05+at+3.45.19+AM.png) | ![](https://paper-attachments.dropbox.com/s_AB7F35483D6E6EA631555F22D997E77073B2BD679AA90C5B33750719AE83C966_1612473450332_image.png) |

