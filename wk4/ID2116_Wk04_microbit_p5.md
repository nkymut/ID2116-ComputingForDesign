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


# AY2021 ID2116 Wk04:<br> micro:bit ↔ p5*js communication

<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Nunito" />
<link rel="stylesheet" href="../css/slidetemplate.css">


<style>
img[alt~="center"] {
  display: block;
  margin: 0 auto;
}
</style>

![bg auto left:25%](https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2020-12-01/1536383585045_77e3ff5ae9fc37b361ef_132.png)

<!-- 
## Index: 
- [[WebUSB] USB Serial Communication with micro:bit](https://paper.dropbox.com/doc/AY2021-ID2116-Wk04-microbit-p5js--BEjdzy0J3H41jkcMMEzCUsRdAg-l57LwqdvPUTBC8z6OcZ5b#:uid=986294029976971357443392&h2=[Wired]-USB-Serial-Communicati)
    - [[USB: micro:bit → p5*js]: Sending the light sensor value to p5*js](https://paper.dropbox.com/doc/AY2021-ID2116-Wk04-microbit-p5js--BEjdzy0J3H41jkcMMEzCUsRdAg-l57LwqdvPUTBC8z6OcZ5b#:uid=209110732840301520484819&h2=[USB:-micro:bit-%E2%86%92-p5*js]:-Send)  
    - [[USB: micro:bit → p5*js]: Control Image slideshow with micro:bit buttons](https://paper.dropbox.com/doc/AY2021-ID2116-Wk04-microbit-p5js-BEjdzy0J3H41jkcMMEzCUsRdAg-l57LwqdvPUTBC8z6OcZ5b#:uid=390056010812607083480264&h2=[USB:-micro:bit-%E2%86%92-p5*js]:-Cont)
    - [[USB micro:bit → p5*js] Sending multiple values to p5.js](https://paper.dropbox.com/doc/AY2021-ID2116-Wk04-microbit-p5js-communication--BGI~NeKpHqVXOzOXlqSKvnFbAg-l57LwqdvPUTBC8z6OcZ5b#:uid=342501432047763409484115&h2=[micro:bit-%E2%86%92-p5*js]-Sending-mu)
    - [[USB: p5.js → micro:bit] Control micro:bit LED with p5.js slider value](https://paper.dropbox.com/doc/AY2021-ID2116-Wk04-microbit-p5js-l57LwqdvPUTBC8z6OcZ5b#:uid=073453659660612340227947&h2=[USB:-p5.js-%E2%86%92-micro:bit]-Contr) 
    - [[USB: p5.js → micro:bit] p5.js microphone Input DEMO](https://paper.dropbox.com/doc/AY2021-ID2116-Wk04-microbit-p5js-l57LwqdvPUTBC8z6OcZ5b#:uid=390056010812607083480264&h2=[USB:-micro:bit-%E2%86%92-p5*js]:-Cont)
- [[BLE] Bluetooth Communication with micro:bit](https://paper.dropbox.com/doc/AY2021-ID2116-Wk04-microbit-p5js-BEfMpJQEahhFVcNFe8Bh8QdNAg-l57LwqdvPUTBC8z6OcZ5b#:uid=193768567320079085890174&h2=[Wireless]-Bluetooth-Comunicat)
    - [[BLE: micro:bit → p5*js]: Control video playback with micro:bit gesture.](https://paper.dropbox.com/doc/AY2021-ID2116-Wk04-microbit-p5js-l57LwqdvPUTBC8z6OcZ5b#:uid=559370689815783445110947&h2=[BLE:-micro:bit-%E2%86%92-p5*js]:-Cont)
    - [[BLE: micro:bit → p5*js]: Control Image Slideshow with micro:bit buttons](https://paper.dropbox.com/doc/AY2021-ID2116-Wk04-microbit-p5js-l57LwqdvPUTBC8z6OcZ5b#:uid=156783111641616534686400&h2=[BLE:-micro:bit-%E2%86%92-p5*js]:-Cont) -->

# [WebUSB] USB Serial Communication with micro:bit
### → Serial Communication

“The [serial](https://makecode.microbit.org/reference/serial) supports [serial communication](https://en.wikipedia.org/wiki/Serial_port) between the BBC micro:bit and another computer. Basically, this allows you to send data from the micro:bit to your own computer. This is very useful for debugging purposes: you can add `write line` statements in your code and see them display on your computer as the program executes.”
  
  https://makecode.microbit.org/device/serial

# micro:bit Serial blocks
**https://makecode.microbit.org/reference/serial**

![h:500px center](./assets/microbit_serial.png)




# [USB: micro:bit → p5js]:<br> Sending the light sensor value to p5*js  
Now, let’s control a p5*js sketch (Bulb) using the light sensor data from the micro:bit. 

micro:bit code: https://makecode.microbit.org/_FpAhTu5mA2jF

p5*js code: https://editor.p5js.org/didny/sketches/_P18rzj9 


#
<iframe src="https://editor.p5js.org/didny/full/_P18rzj9"> </iframe>

 
## Step 01: Load Serial_LightSensor code to micro:bit** 

**Serial_LightSensor:  https://makecode.microbit.org/_FpAhTu5mA2jF**

![Serial Light Sensor](https://paper-attachments.dropbox.com/s_EA31771E711951B20C00D2E226C1EB5563480D07E4B4D3A947FC87C420AE3881_1580975984582_file.png)


## Step:02:  Load webUSB Library to the p5*js** 

1-1. Download the micro:bit WebUSB Library
[https://www.dropbox.com/s/mkxpayii0dqqw7x/ubitwebusb.js?dl=1](https://www.dropbox.com/s/mkxpayii0dqqw7x/ubitwebusb.js?dl=1)
    
1-2. Upload “ubitwebusb.js” file to the sketch folder of [the LightBulb Code](https://editor.p5js.org/didny/sketches/lNbPXn-QZ).
**p5js code: https://editor.p5js.org/didny/sketches/lNbPXn-QZ**
![bg right h:300px](https://paper-attachments.dropbox.com/s_EA31771E711951B20C00D2E226C1EB5563480D07E4B4D3A947FC87C420AE3881_1581030482722_file.png)

## Step:03:  Load webUSB Library to the p5*js** 

1. Open “index.html” from Sketch Files:  and add following line above “sketch.js” link.
This will allow p5 to use the micro:bit webusb library. 
```
<script src="ubitwebusb.js"></script>
```
![center ](https://paper-attachments.dropbox.com/s_EA31771E711951B20C00D2E226C1EB5563480D07E4B4D3A947FC87C420AE3881_1581030254298_file.png)

    

## Step:04:  Add “Connect”/”Disconnect” Buttons.
4-1. Declare button objects and set properties  

```js
// Buttons to connect/disconnect to micro:bit
let connectBtn;
let disconnectBtn;
```

4-2. Inside setup() function, 
     Create Buttons to call connect/disconnect functions from ubitwebusb.js
```js
// function setup() {
//   createCanvas(canvasWidth, canvasHeight);

 //add connect button
  connectBtn = createButton("connect");
  connectBtn.mousePressed(connect);
  //add disconnect button
  disconnectBtn = createButton("disconnect");
  disconnectBtn.mousePressed(disconnect);
  
```
<!-- 
![](https://paper-attachments.dropbox.com/s_EA31771E711951B20C00D2E226C1EB5563480D07E4B4D3A947FC87C420AE3881_1581030545249_file.png) -->


## Step:05:  Add   handleUsbData() function to handle incoming data from micro:bit

 handleUsbData event function is called when the p5 sketch received data from microbit. 

```js
// USB Serial Event Callback function
function handleUsbData(data){
  print("data:",data);
  let val = int(data); //convert to number
  bulb.brightness = val;
  
  fadeSlider.value(bulb.brightness);
}
``` 

# Data conversions in p5

[**int(data)**](https://p5js.org/reference/#/p5/int)  converts incoming “string” data to numerical integer value. 


p5.js has the following data conversion functions.


[int()](https://p5js.org/reference/#/p5/int) : text to integer &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"0" -> 0
[float()](https://p5js.org/reference/#/p5/float) : text to float number &ensp;"0.5" -> 0.5
[str()](https://p5js.org/reference/#/p5/float) : number to text &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;0.5 -> "0.5"
[boolean()](https://p5js.org/reference/#/p5/float) : text to boolean &ensp;"true" -> true






## Challenge:  Turn the Bulb into  a Sensor Light


### Add a conditional statement in the handleUsbData()<br>  so that the light turns on when the brightness drops below 20, and turns off when it exceeds 20.


<!-- **Send various Sensor values:**  https://makecode.microbit.org/_KJ04jUgi94zd -->

<!-- video of webUSB https://www.dropbox.com/s/n8nb4xnn4prgxbu/AllSensorDemo.mp4?dl=0 -->



## [USB: micro:bit → p5*js]: Control Image slideshow with micro:bit buttons

**micro:bit code: https://makecode.microbit.org/_9RM9kW60zFjK**
**p5*js code:** https://editor.p5js.org/didny/sketches/vRopIXHjq




| **micro:bit code**                                                                                                                                                  | **p5.js code**                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](https://paper-attachments.dropbox.com/s_AB7F35483D6E6EA631555F22D997E77073B2BD679AA90C5B33750719AE83C966_1612428656797_Screenshot+2021-02-04+at+4.50.10+PM.png) | ![](https://paper-attachments.dropbox.com/s_AB7F35483D6E6EA631555F22D997E77073B2BD679AA90C5B33750719AE83C966_1612485732454_Screenshot+2021-02-05+at+8.41.34+AM.png) |

<!-- **JavaScript trim()** method: https://www.w3schools.com/jsref/jsref_trim_string.asp -->


## [USB: p5.js → micro:bit] Control micro:bit LED with p5.js slider value 

**microbit code:** https://makecode.microbit.org/31374-29890-38666-61410
**p5*js code:** https://editor.p5js.org/didny/sketches/CoIoFM3B


![bg left h:200px vertical](https://paper-attachments.dropbox.com/s_AB7F35483D6E6EA631555F22D997E77073B2BD679AA90C5B33750719AE83C966_1612463555198_Screenshot+2021-02-05+at+2.32.18+AM.png) 
![bg right h:350px](https://paper-attachments.dropbox.com/s_AB7F35483D6E6EA631555F22D997E77073B2BD679AA90C5B33750719AE83C966_1612467621932_Screenshot+2021-02-05+at+3.40.07+AM.png) 

#

<iframe src="https://editor.p5js.org/didny/full/CoIoFM3B"> </iframe>

## [micro:bit → p5*js] Sending multiple values to p5.js
<!-- ![bg right h:300px](https://paper-attachments.dropbox.com/s_EA31771E711951B20C00D2E226C1EB5563480D07E4B4D3A947FC87C420AE3881_1582139394547_file.png) -->

**micro:bit code:** https://makecode.microbit.org/_Pv4YdyaA0hv9
**p5.js code:** https://editor.p5js.org/didny/sketches/oqxTQ1h1

#
<iframe src="https://editor.p5js.org/didny/full/oqxTQ1h1"> </iframe>



## Handling Comma Seperated Value

- [split(",");](https://www.w3schools.com/jsref/jsref_split.asp) splits a string value into array of substrings

- map(val, min, max, target_min, target_max);



#  [micro:bit] Sending multiple values to p5.js
Serial communication can only send a single text, so multiple numbers need to be sent as a taxt separated by commas.

step1: read accelerometer values to variables 
 R ← X axis , G ← Y axis ,B ← Z axis   

step2: join variable into a “Comma Separated  Value ” and send via Serial  
- Join R +“,” + G + “,” + B 
- creates a text line “R,G,B” 
- e.g. “128,255,1023”                                              ![bg right:30% h:400px](https://paper-attachments.dropbox.com/s_EA31771E711951B20C00D2E226C1EB5563480D07E4B4D3A947FC87C420AE3881_1582138859204_file.png)                                                                                                 |

  

#  [p5] Split comma seperated value


Step01: p5.js receives data from micro:bit as a string “R,G,B”  

```
function handleUsbData(){ 
  print(data);  // text data “600,350,800\n” 
}
```
Step02: split text string by “,”(comma) delimiter and convert text into an array of integer values. 
 ```
  values = data.split(","); // split data with comma 
  values = int(values); //convert to number(integer)
  print(values); // print ["600", "350", "800\n"]
 ```

#  [p5] [map()](https://p5js.org/reference/#/p5/map) sensor data
Since some of the micro:bit's accelerometer  returns values between **-1023 and 1023**
In order to use these as p5 color data, we need to set our range to **0-255**.
To do this, we will use the map() function.

**map(value, min, max, target_min, target_max)**


```
  //map value range from microbit's accelerometer(-1023,1023) to RGB color(0,255)
  //and assign values to RGB color variables. 
  R = map(value[0],-1023,1023,0,255);
  G = map(value[1],-1023,1023,0,255);
  B = map(value[2],-1023,1023,0,255);
``` 
<!-- ![bg right:60% h:300px](https://paper-attachments.dropbox.com/s_EA31771E711951B20C00D2E226C1EB5563480D07E4B4D3A947FC87C420AE3881_1582139854921_file.png)   -->


##

GABRIELLA EDITH TAN RUI,RAIN TAY XIN YU,WONG YU TING ASHLYN
<iframe width="560" height="315" src="https://www.youtube.com/embed/fzV1dl7LCEM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

##

p5js: https://editor.p5js.org/didny/sketches/O2vmLoa86
micro:bit: https://makecode.microbit.org/_hcC6eUDRY79j
state transition diagram:
https://www.dropbox.com/s/yeap6x49z5zbp58/BunnySTM.pdf?dl=0

##
<iframe src="https://editor.p5js.org/didny/full/O2vmLoa86"></iframe>


## 
<iframe src="https://www.dropbox.com/s/yeap6x49z5zbp58/BunnySTM.pdf?dl=0" > </iframe>



## [p5.js → micro:bit] p5.js microphone Input DEMO

https://editor.p5js.org/didny/sketches/1lPD89fXB
<iframe class="p5" src="https://editor.p5js.org/didny/full/1lPD89fXB"></iframe>

![center h:500px](./assets/1x1.png)



# p5*js Communication libraries: 
- WebUSB Library:  https://github.com/bsiever/microbit-webusb
    - p5*js sample: https://github.com/nkymut/microbit-webusb-p5js
- Bluetooth Library: https://antefact.github.io/microBit.js/

# Challenges

### Emoji Agent: https://editor.p5js.org/didny/sketches/KWquYAjGF

### 1. Add the microbit USB serial communication code to the emoji agent code, and Feed the Emoji Agent.

### 2. Find a way to interact with the Emoji Agent by combining the daily items you brought today with the micro:bit sensors, and try to implement it.

### 3. Build a DIY sensors from the Electronics As Material module and connect it with micro:bit through pin block. 
https://github.com/clementzheng/Electronics-As-Material
https://makecode.microbit.org/reference/pins





# References

### p5.js WebUSB library 
https://github.com/bsiever/microbit-webusb

**sample codes  https://github.com/nkymut/microbit-webusb-p5js**

<!--     
# Assignments:
## [Wk04 Assignment 02] Experiment with micro:bit + media player interaction.
- By modifying p5*js ← → micro:*bit samples, try implementing some (or all) of your state transitions. 
    - e.g.  (A Butterfly Hovering) →  clap your hand → (A Butterfly Flies away)   -->





