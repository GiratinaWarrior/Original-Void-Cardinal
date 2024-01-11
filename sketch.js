//LEETSS GOOOOOOOO LETSA GOOO 
x = 200;
y = 200;
speed = 3;
ColorCircle = "red";
screen = 0;
//screen0 = Title Screen
//screen0.5 = Introduction
//screen0.9 = PlayerSelect
//screen1 = Empty Town
//screen2 = Field
//screen2.1 = Field Boss Entrance
//screen2.3 = Field Boss Battle
//screen2.6 = Field Orb Location
//screen3 = Ocean
//screen3.1 = Ocean Boss Entrance
//screen3.3 = Ocean Boss Battle
//screen3.6 = Ocean Orb Location
//screen4 = Tundra
//screen4.1 = Tundra Boss Entrance
//screen4.3 = Tundra Boss Battle
//screen4.6 = Tundra Orb Location
//screen5 = Desert
//screen5.1 = Desert Boss Entrance
//screen5.3 = Desert Boss Battle
//screen5.6 = Desert Orb Location
//screen6 = Void
//screen6.3 = Void Walkway
//screen6.6 = Void Hall
//screen-1 = Death
//screen-2 = Cliff Hanged
//screen-3 = Cutscene
//screen-3.5 = AncientShrine
//screen7.5 = Jesters Tunnel
//screen7.9 = Sorcerers Cavern
//screen7 = Magic Boss Battle
i1X = 200;
i1Y = 380;
i2X = 200;
i2Y = 20;
i3X = 20;
i3Y = 200;
i4X = 380;
i4Y = 200;
i0X = 200;
i0Y = 200;
//item1 = Field Orb
item1 = false;
//item2 = Ocean Orb
item2 = false;
//item3 = Tundra Orb
item3 = false;
//item4 = Desert Orb
item4 = false;
itemAll = false;
item0 = false;
textX = 154;
textY = 201;
shoot = false;
let shootX;
let shootY;
TrueShotDamage = 1;
bossX = 200;
bossY = 125;
bosspeed = 7;
Health = 400;
FinalBossBar = "green";
WhiteCirX1 = 50;
WhiteCirY1 = 1000;
WhiteCirX2 = 150;
WhiteCirY2 = 1000;
WhiteCirX3 = 250;
WhiteCirY3 = 1000;
WhiteCirX4 = 350;
WhiteCirY4 = 1000;
WhiteCirX5 = 100;
WhiteCirY5 = -800;
WhiteCirX6 = 200;
WhiteCirY6 = -800;
WhiteCirX7 = 300;
WhiteCirY7 = -800;
GreyRectX1 = -1500;
GreyRectY1 = 260;
GreyRectX2 = 2100;
GreyRectY2 = 330;
DGreyTriX1 = -5000;
DGreyTriY1 = 330;
DGreyTriX2 = 5400;
DGreyTriY2 = 330;
DGreyTriX3 = 200;
DGreyTriY3 = 5400;
DGreyTriX4 = 200;
DGreyTriY4 = -5000;
WhiteRectX1 = -3800;
WhiteRectY1 = 260;
WhiteRectX2 = 4500;
WhiteRectY2 = 330;
WhiteRectX3 = -4500;
WhiteRectY3 = 260;
WhiteRectX4 = 5200;
WhiteRectY4 = 330;
WhiteRectX5 = -5200;
WhiteRectY5 = 260;
WhiteRectX6 = 5900;
WhiteRectY6 = 330;
GreyCircleX1 = -6000;
GreyCircleY1 = 330;
GreyCircleX2 = 7000;
GreyCircleY2 = 330;
FieldX1 = -390;
FieldY1 = 100;
FieldSpeed = 2;
FieldX2 = 390;
FieldY2 = 200;
FieldSpeed2 = 2;
FieldX3 = -390;
FieldY3 = 300;
FieldSpeed3 = 2;
OceanX1 = 0;
OceanY1 = 0;
OceanSpeed = 3;
OceanX2 = 200;
OceanY2 = -100;
OceanSpeed2 = 3;
TundraX1 = 75;
TundraY1 = 0;
let TundraSpeed;
TundraX2 = 125;
TundraY2 = 0;
let TundraSpeed2;
TundraX3 = 175;
TundraY3 = 0;
let TundraSpeed3;
TundraX4 = 225;
TundraY4 = 0;
let TundraSpeed4;
TundraX5 = 275;
TundraY5 = 0;
let TundraSpeed5;
TundraX6 = 75;
TundraY6 = -80;
let TundraSpeed6;
TundraX7 = 125;
TundraY7 = -80;
let TundraSpeed7;
TundraX8 = 175;
TundraY8 = -80;
let TundraSpeed8;
TundraX9 = 225;
TundraY9 = -80;
let TundraSpeed9;
TundraX10 = 275;
TundraY10 = -80;
let TundraSpeed10;

DesertX1 = 290;
DesertY1 = 45;
let DesertSpeed;
DesertX2 = 340;
DesertY2 = 100;
let DesertSpeed2;
DesertX3 = 390;
DesertY3 = 150;
let DesertSpeed3;
DesertX4 = 440;
DesertY4 = 200;
let DesertSpeed4;
DesertX5 = 490;
DesertY5 = 250;
let DesertSpeed5;
DesertX6 = 540;
DesertY6 = 300;
let DesertSpeed6;
DesertX7 = 540;
DesertY7 = 340;
let DesertSpeed7;
DesertX8 = 540;
DesertY8 = 380;
let DesertSpeed8;

BallX1 = 170;
BallY1 = 290;
BallX2 = 200;
BallY2 = 270;
BallX3 = 230;
BallY3 = 290;
BallSpeed1 = 1;
BallSpeed2 = 1;
BallSpeed3 = 1;
DeathColor = 0;
TextColor = 0;
TextColor2 = 0;
BossColor = 10;
SkyColor = 1;
SkyColor2 = 1;
GrassColor = -10;
SunColor = -10;
BounceColor = -10;
PeaceColor = 1;
PeaceColor2 = 1;
HalfBossX1 = 200;
HalfBossY1 = 100;
HalfBossX2 = 200;
HalfBossY2 = 100;
HalfBossX3 = 200;
HalfBossY3 = 100;
HalfBossX4 = 200;
HalfBossY4 = 100;
VoidEyeX = 200;

BallCutY = 330;
DownArrowColor = 0;
DownArrowOpaque = 50;
UpArrowColor = 0;
UpArrowOpaque = 50;
LeftArrowColor = 0;
LeftArrowOpaque = 50;
RightArrowColor = 0;
RightArrowOpaque = 50;

TextXX = 30;
TextYY = 100;
TipX = 100;
TipY = 330;

//Field Boss Setting

fieldgame = true;
FieldBossX = 200;
FieldBossY = 300;
fieldspeed = 5;
FieldBossHealth = 400;
FieldBossHealthBarColor = "green";
FieldPlayerHealth = 200;
FieldPlayerHealthBarColor = "green";
let FieldShotX;
let FieldShotY;
FieldShotDamage = 1;
fieldshoot = false;
FieldBossGreen = 100;
FieldBossStrokeWeight = 1;
//-500
HayAttackX1 = -300;
HayAttackY1 = 19;
//900
HayAttackX2 = 700;
HayAttackY2 = 56;
//-500
HayAttackX3 = -300;
HayAttackY3 = 94;
//900
HayAttackX4 = 700;
HayAttackY4 = 131;
HaySpeed = 2;
HaySize = 37.5;
TractorAttackX1 = 0;
TractorAttackY1 = 2200;
TractorAttackX2 = 200;
TractorAttackY2 = 2300;
TractorAttackX3 = 0;
TractorAttackY3 = 2400;
TractorAttackX4 = 200;
TractorAttackY4 = 2500;
TractorAttackX5 = 0;
TractorAttackY5 = 2600;
TractorAttackX6 = 200;
TractorAttackY6 = 2700;
TractorSpeed = 4;
HayDamage = 1;
TractorDamage = 3;
fieldfightResult = 0;
/*
Neutral = 0
Win = 1
Lose = 2
Tie = 3 if you somehow manage it
*/
FieldBossDie = false;
FieldPlayerDie = false;

//Cutscene if Player Wins
FieldCutx = 200;
FieldCuty = 75;
FieldQuadBossX1 = 200;
FieldQuadBossY1 = 300;
FieldQuadBossX2 = 200;
FieldQuadBossY2 = 300;
FieldQuadBossX3 = 200;
FieldQuadBossY3 = 300;
FieldQuadBossX4 = 200;
FieldQuadBossY4 = 300;
FieldCutBossGreen = 100;
FieldLaserHeight = 0;
FieldLaserY = 90;
let Laser = ColorCircle;
let LaserChange = 10;
fieldtime = 0;
CutFieldLeftEyeX = 180;
CutFieldRightEyeX = 220;

//Cutscene if Boss Wins
FieldCutBossX = 200;
FieldCutBossY = 300;
FieldCutBossX2 = -100;
FieldCutBossY2 = 200;
FieldBossY2 = 200;
FieldCutCutBossGreen = 100;
FieldCutCutBoss2Green = 100;
FieldQuadX1 = 200;
FieldQuadY1 = 200;
FieldQuadX2 = 200;
FieldQuadY2 = 200;
FieldQuadX3 = 200;
FieldQuadY3 = 200;
FieldQuadX4 = 200;
FieldQuadY4 = 200;
FieldPlayerRed = 255;
Fieldtime = 0;
FieldCutspeed = 20;
FieldCutspeed2 = 20;
FieldCutSceneBackground = 200;
CutCutFieldLeftX = 180;
CutCutFieldRightX = 220;

//Ocean Boss Setting

oceangame = true;
OceanBossX = 200;
OceanBossY = 100;
oceanspeed = 5;
OceanBossHealth = 400;
OceanBossHealthBarColor = "green";
OceanPlayerHealth = 200;
OceanPlayerHealthBarColor = "green";
let OceanShotX;
let OceanShotY;
OceanShotDamage = 1;
oceanshoot = false;
OceanPlayerColor = "red";
SharkAttackX1 = 800;
SharkAttackY1 = 300;
let Shark1Speed;
SharkAttackX2 = -400;
SharkAttackY2 = 300;
let Shark2Speed;
SharkAttackX3 = 800;
SharkAttackY3 = 365;
let Shark3Speed;
SharkAttackX4 = -400;
SharkAttackY4 = 365;
let Shark4Speed;
SharkDamage = 0.5;
YellowLightningX1 = 0;
YellowLightningY1 = -30000;
YellowLightningX2 = 100;
YellowLightningY2 = -30000;
YellowLightningX3 = 200;
YellowLightningY3 = -30000;
YellowLightningX4 = 300;
YellowLightningY4 = -30000;
YellowLightningX5 = 380;
YellowLightningY5 = -30000;
let YellowLightningSpeed = 100;
YellowLightningDamage = 30;

CyanLightningX1 = 50;
CyanLightningY1 = -35000;
CyanLightningX2 = 150;
CyanLightningY2 = -35000;
CyanLightningX3 = 250;
CyanLightningY3 = -35000;
CyanLightningX4 = 340;
CyanLightningY4 = -35000;
let CyanLightningSpeed = 100;
CyanLightningDamage = 30;

YellowWarningX1 = -15;
YellowWarningY1 = 290;
YellowWarningX2 = 85;
YellowWarningY2 = 290;
YellowWarningX3 = 185;
YellowWarningY3 = 290;
YellowWarningX4 = 285;
YellowWarningY4 = 290;
YellowWarningX5 = 365;
YellowWarningY5 = 290;

CyanWarningX1 = 50;
CyanWarningY1 = 290;

CyanWarningX2 = 150;
CyanWarningY2 = 290;

CyanWarningX3 = 250;
CyanWarningY3 = 290;

CyanWarningX4 = 340;
CyanWarningY4 = 290;

//Cutscene if Player Wins
OceanCutx = 200;
OceanCuty = 350;
OceanQuadBossX1 = 200;
OceanQuadBossY1 = 100;
OceanQuadBossX2 = 200;
OceanQuadBossY2 = 100;
OceanQuadBossX3 = 200;
OceanQuadBossY3 = 100;
OceanQuadBossX4 = 200;
OceanQuadBossY4 = 100;
OceanBossBlue = 200;
OceanBackgroundBlue = 50;
Laser = ColorCircle;
LaserChange = 10;
OceanLaserHeight = 0;
OceanLaserY = 310;
oceantime = 0;
CutOceanLeftEyeX = 180;
CutOceanRightEyeX = 220;
//Cutscene if Boss Wins
OceanQuadX1 = 200;
OceanQuadY1 = 200;
OceanQuadX2 = 200;
OceanQuadY2 = 200;
OceanQuadX3 = 200;
OceanQuadY3 = 200;
OceanQuadX4 = 200;
OceanQuadY4 = 200;
OceanPlayerRed = 255;
OceanCutBossX = 200;
OceanCutBossY = 75;
OceanBossBlue = 200;
OceanCutBackBlue = 50;
CutSharkX1 = -100;
CutSharkY1 = 200;
CutSharkX2 = 500;
CutSharkY2 = 200;
CutSharkX3 = 200;
CutSharkY3 = 500;
CutSharkX4 = 200;
CutSharkY4 = -100;
oceanfightResult = 0;
OceanBossDie = false;
OceanPlayerDie = false;
/*
Neutral = 0
Win = 1
Lose = 2
Tie = 3 if you cheat or something
*/

//Tundra Boss Settings

tundraspeed = 5;
TundraBossX = 100;
TundraBossY = 200;
tundragame = true;
tundrashoot = false;
/*
Neutral = 0
Win = 1
Lose = 2
Tie = 3 if you somehow manage it
*/
tundrafightResult = 0;
let tundrashotX;
let tundrashotY;
let TundraShotDamage = 1;
let TundraBossHealth = 0;
let TundraBossHealthBarColor = "green";
let TundraPlayerHealth = 200;
let TundraPlayerHealthBarColor = "green";
let HailAttackX1 = -700;
let HailAttackY1 = 0;
let HailAttackX2 = -700;
let HailAttackY2 = 80;
let HailAttackX3 = -700;
let HailAttackY3 = 187.5;
let HailAttackX5 = -700;
let HailAttackY5 = 300;
let HailAttackX6 = -700;
let HailAttackY6 = 380;
let HailSpeed1;
let HailSpeed2;
let HailSpeed3;
let HailSpeed5;
let HailSpeed6;
let SnowAttackX1 = 275;
let SnowAttackY1 = -1600;
let SnowAttackX2 = 300;
let SnowAttackY2 = 1800;
let SnowAttackX3 = 325;
let SnowAttackY3 = -2000;
let SnowAttackX4 = 350;
let SnowAttackY4 = 2200;
let SnowAttackX5 = 375;
let SnowAttackY5 = -2400;
let TopSnowSpeed1;
let TopSnowSpeed2;
let TopSnowSpeed3;
let BottomSnowSpeed1;
let BottomSnowSpeed2;
let HailHealthDecrease = 7;
let SnowHealthDecrease = 3;
TundraBossDie = false;
TundraPlayerDie = false;
//Cutscene if Player Wins
TundraCuty = 200;
TundraCutx = 325;
TundraQuadBossX1 = 100;
TundraQuadBossY1 = 200;
TundraQuadBossX2 = 100;
TundraQuadBossY2 = 200;
TundraQuadBossX3 = 100;
TundraQuadBossY3 = 200;
TundraQuadBossX4 = 100;
TundraQuadBossY4 = 200;
TundraBossWeight = 1;
TundraCutSceneBackground = 255;
TundraBossColor = 255;
TundraLaserWidth = 0;
TundraLaserX = 305;
Laser = ColorCircle;
LaserChange = 10;
tundratime = 0;
CutTundraLeftEyeX = 120;
CutTundraRightEyeX = 80;
//Cutscene if Boss Wins
SnowBackground = 225;
TundraCutBossX = 100;
TundraCutBossY = 200;
TundraQuadX1 = 325;
TundraQuadY1 = 200;
TundraQuadX2 = 325;
TundraQuadY2 = 200;
TundraQuadX3 = 325;
TundraQuadY3 = 200;
TundraQuadX4 = 325;
TundraQuadY4 = 200;
TundraPlayerRed = 255;
TundraPlayerGreen = 0;
TundraPlayerBlue = 0;
TundraPlayerWeight = 1;
TundraBossWeight = 1;
AvalancheX = -2400;
AvalancheY = 0;

//Desert Boss Setting

DesertBossX = 300;
DesertBossY = 200;
desertspeed = 5;
desertgame = true;
desertfightResult = 0;
/*
Neutral = 0
Win = 1
Lose = 2
Tie = 3 if you somehow manage it
*/
let desertshotX;
let desertshotY;
let desertshoot = false;
let DesertShotDamage = 1;
let DesertBossHealth = 0;
let DesertBossHealthBarColor = "green";
let DesertPlayerHealth = 200;
let DesertPlayerHealthBarColor = "green";
let DesertPlayerColor = "red";

let space = true;

CactusX1 = 700;
CactusY1 = 200;
let CactusX1Speed = 4;
let CactusY1Speed = 10;
CactusX2 = 700;
CactusY2 = 200;
let CactusX2Speed = 4;
let CactusY2Speed = 10;
CactusX3 = 800;
CactusY3 = 200;
let CactusX3Speed = 4;
let CactusY3Speed = 10;
CactusX4 = 800;
CactusY4 = 200;
let CactusX4Speed = 4;
let CactusY4Speed = 10;
CactusX5 = 900;
CactusY5 = 200;
let CactusX5Speed = 4;
let CactusY5Speed = 10;
CactusX6 = 900;
CactusY6 = 200;
let CactusX6Speed = 4;
let CactusY6Speed = 10;
CactusX7 = 1000;
CactusY7 = 200;
let CactusX7Speed = 4;
let CactusY7Speed = 10;
CactusX8 = 1000;
CactusY8 = 200;
let CactusX8Speed = 4;
let CactusY8Speed = 10;
CactusX9 = 1100;
CactusY9 = 200;
let CactusX9Speed = 4;
let CactusY9Speed = 10;
CactusX10 = 1100;
CactusY10 = 200;
let CactusX10Speed = 4;
let CactusY10Speed = 10;

let CactusDamage = 2;

// SAND ATTACK

let SandAttackCommonSpeed = 8;

SandXA1 = 3500;
SandYA1 = 50;
SandXB1 = SandXA1 + 70;
SandYB1 = SandYA1 + 20;
SandXC1 = SandXA1 + 70;
SandYC1 = SandYA1 - 20;
let GunSpeedX1 = SandAttackCommonSpeed;
let GunSpeedY1 = 0;

SandXA2 = 3700;
SandYA2 = 100;
SandXB2 = SandXA2 + 70;
SandYB2 = SandYA2 + 20;
SandXC2 = SandXA2 + 70;
SandYC2 = SandYA2 - 20;
let GunSpeedX2 = SandAttackCommonSpeed;
let GunSpeedY2 = 0;

SandXA3 = 3900;
SandYA3 = 150;
SandXB3 = SandXA3 + 70;
SandYB3 = SandYA3 + 20;
SandXC3 = SandXA3 + 70;
SandYC3 = SandYA3 - 20;
let GunSpeedX3 = SandAttackCommonSpeed;
let GunSpeedY3 = 0;

SandXA4 = 4100;
SandYA4 = 200;
SandXB4 = SandXA4 + 70;
SandYB4 = SandYA4 + 20;
SandXC4 = SandXA4 + 70;
SandYC4 = SandYA4 - 20;
let GunSpeedX4 = SandAttackCommonSpeed;
let GunSpeedY4 = 0;

SandXA5 = 4300;
SandYA5 = 250;
SandXB5 = SandXA5 + 70;
SandYB5 = SandYA5 + 20;
SandXC5 = SandXA5 + 70;
SandYC5 = SandYA5 - 20;
let GunSpeedX5 = SandAttackCommonSpeed;
let GunSpeedY5 = 0;

SandXA6 = 4500;
SandYA6 = 300;
SandXB6 = SandXA6 + 70;
SandYB6 = SandYA6 + 20;
SandXC6 = SandXA6 + 70;
SandYC6 = SandYA6 - 20;
let GunSpeedX6 = SandAttackCommonSpeed;
let GunSpeedY6 = 0;

SandXA7 = 4700;
SandYA7 = 350;
SandXB7 = SandXA7 + 70;
SandYB7 = SandYA7 + 20;
SandXC7 = SandXA7 + 70;
SandYC7 = SandYA7 - 20;
let GunSpeedX7 = SandAttackCommonSpeed;
let GunSpeedY7 = 0;

let SandDamage = 2;
//Anything from MIN 20-130 MAX
let TurnPlace1;
let TurnPlace2;
let TurnPlace3;
let TurnPlace5;
let TurnPlace6;
let TurnPlace7;

let SandTurned1 = false;
let SandTurned2 = false;
let SandTurned3 = false;
let SandTurned4 = false;
let SandTurned5 = false;
let SandTurned6 = false;
let SandTurned7 = false;

//Cutscene if Player Wins
DesertCutx = 75;
DesertCuty = 200;
DesertQuadBossX1 = 300;
DesertQuadBossY1 = 200;
DesertQuadBossX2 = 300;
DesertQuadBossY2 = 200;
DesertQuadBossX3 = 300;
DesertQuadBossY3 = 200;
DesertQuadBossX4 = 300;
DesertQuadBossY4 = 200;
DesertLaserWidth = 0;
DesertLaserX = 95;
Laser = ColorCircle;
LaserChange = 10;
DesertTime = 0;
DesertCutSceneBackgroundRed = 255;
DesertCutSceneBackgroundGreen = 140;
DesertBossWeight = 1;
DesertBossRed = 255;
DesertBossGreen = 80;
CutDesertLeftEyeX = 280;
CutDesertRightEyeX = 320;
//Cutscene if Boss Wins
DesertCutBossX = 300;
DesertCutBossY = 200;

DesertQuadX1 = 75;
DesertQuadY1 = 200;
DesertQuadX2 = 75;
DesertQuadY2 = 200;
DesertQuadX3 = 75;
DesertQuadY3 = 200;
DesertQuadX4 = 75;
DesertQuadY4 = 200;

DesertCutCutBackRed = 225;
DesertCutCutBackGreen = 140;
DesertPlayerRed = 255;
DesertPlayerGreen = 0;

DesertBossWeight = 1;
DesertPlayerWeight = 1;
deserttime = 0;
deserttime2 = 0;

DesertBossMass = 100;
DesertBossGreen = 80;
DesertBossRed = 225;

DesertBossSizeChaos = false;
DesertBossSizeFlunctuation = 5;

DesertBossDie = false;
DesertPlayerDie = false;

MainTextFill = 0;
BottomTextFill = 0;
IntroText1 = 0;
IntroText2 = 0;
IntroText3 = 0;
IntroText4 = 0;
IntroText5 = 0;
IntroBox = 0;

TimeHasntComeX = 3;
ReturnY = 270;

VoidColorTiming = 0;
VoidColorChange = 1;
VoidPathColor = "black";

VoidWalkCutX = 200;
VoidWalkCutY = 425;

VoidFieldOrbColor = 0;
VoidOceanOrbColor = 0;
VoidTundraOrbColor = 0;
VoidDesertOrbColor = 0;

VoidHallCutX = 200;
VoidHallCutY = 425;

VoidHallFieldX = 150;
VoidHallOceanX = 250;
VoidHallTundraY = 250;
VoidHallDesertY = 150;
VoidHallTransform = 0;
RisingDarkness = 0;
VoidOrbSize = 25;
VoidFusion = 0;

VoidBossCutX = 200;
VoidBossCutY = 200;
VoidBossCutSize = 50;

BossOrbAngle = 0;
let BossOrbRotate;

BossFieldOrb = "lime";
BossFieldOrbX = bossX - 75;
BossOceanOrb = "blue";
BossOceanOrbX = bossX + 75;
BossTundraOrb = "white";
BossTundraOrbY = bossY + 75;
BossDesertOrb = "orange";
BossDesertOrbY = bossY - 75;
OrbColorChange = 0;
OrbShift = 5;

let TrueLaserY = 310;
let TrueLaserHeight = 0;

FieldCutOrbX = 125;
OceanCutOrbX = 275;
TundraCutOrbY = 25;
DesertCutOrbY = 175;

FieldCutOrbY = 100;
OceanCutOrbY = 100;
TundraCutOrbX = 200;
DesertCutOrbX = 200;
DesertCutOrbSpeed = 1;

LaserColorRed = 255;
LaserColorGreen = 255;
LaserColorBlue = 255;
let LaserColor;
LaserSpeed = 0.1;
LaserTime = 0;

OrbReturnPosition = 0;
OrbReturnCount = 0;

FieldOrbHome = "gray";
OceanOrbHome = "gray";
TundraOrbHome = "gray";
DesertOrbHome = "gray";

CardinalY = -50;
OrbReturned = false;
OrbReturnTime = 0;
LightPressure = false;
BlindingLight = -1000;
ShrinePath = 0;
DazzlingDeath = 0;

RedCircleX = 200;
OrangeCircleX = 600;
YellowCircleX = 1000;
LimeCircleX = 1400;
GreenCircleX = 1800;
CyanCircleX = 2200;
BlueCircleX = 2600;
PurpleCircleX = 3000;
MagentaCircleX = 3400;
PinkCircleX = 3800;

ColorSelect = 1;
//1 = Red
//2 = Orange
//3 = Yellow
//4 = Lime
//5 = Green
//6 = Cyan
//7 = Blue
//8 = Purple

let WhiteCircleReturn;
let WhiteCircleReturn2;
let DarkRectReturn;
let DarkRectReturn2;
let DarkGreyTriReturn;
let DarkGreyTriReturn2;
let DarkGreyTriReturn3;
let DarkGreyTriReturn4;
let WhiteRectReturn;
let WhiteRectReturn2;
let GreyCircleReturn;
let GreyCircleReturn2;

TownLetterColor = 255;
VoidBarrier = 0;

RedStarX = 50;
RedStarY = -100;
let RedStarSize;
let RedDescent;

BlueStarX = 100;
BlueStarY = -30;
let BlueStarSize;
let BlueDescent;

YellowStarX = 150;
YellowStarY = -175;
let YellowStarSize;
let YellowDescent;

GreenStarX = 200;
GreenStarY = -135;
let GreenStarSize;
let GreenDescent;

PurpleStarX = 250;
PurpleStarY = -250;
let PurpleStarSize;
let PurpleDescent;

OrangeStarX = 300;
OrangeStarY = -195;
let OrangeStarSize;
let OrangeDescent;

PinkStarX = 350;
PinkStarY = -295;
let PinkStarSize;
let PinkDescent;

MagentaStarX = 400;
MagentaStarY = -245;
let MagentaStarSize;
let MagentaDescent;

LimeStarX = 0;
LimeStarY = -300;
let LimeStarSize;
let LimeDescent;

let MinDescent = 5;
let MaxDescent = 10;

let GalaxyColor = 0;
let GalacticShift = 0.5;

let MinStarSize = 50;
let MaxStarSize = 100;

let StarWallOpaque = 255;

MagicBossX = 200;
MagicBossY = 100;
let MagicBossSpeed = 7;
magicgame = true;
MagicBossHealth = 400;
MagicBossHealthBarColor = "green";
MagicPlayerHealth = 200;
MagicPlayerHealthBarColor = "green";
let MagicShotX;
let MagicShotY;
MagicShotSpeed = 10;
MagicShotDamage = 1;
magicshoot = false;
//Top Flat
MagicBarrierX1 = 0;
MagicBarrierY1 = 230;
MagicBarrierW1 = 400;
MagicBarrierH1 = 10;
//left
MagicBarrierX2 = -10;
MagicBarrierY2 = 230;
MagicBarrierW2 = 10;
MagicBarrierH2 = 200;
//right
MagicBarrierX3 = 410;
MagicBarrierY3 = 230;
MagicBarrierW3 = 10;
MagicBarrierH3 = 200;
//Down Flat
MagicBarrierX4 = 0;
MagicBarrierY4 = 410;
MagicBarrierW4 = 400;
MagicBarrierH4 = 10;
//down thin
SpecialBarrierX = 195;
//Transform to 240 later
SpecialBarrierY = 400;
SpecialBarrierW = 10;
SpecialBarrierH = 200;

BarrierTransformRate = 10;

MouthUpY = 10;
SmileUpY = 0;

MouthTime = 0;
MouthTimeRise = 0.1;

EvilEye = "black";

SlowBeamX = 0;
SlowBeamY = 420;
let Slow = false;
SlowCount = 0;
SlowCountRise = 1;
let Invisibility = false;
InvisibleCounter = 0;

MagicBossRed = 218;
MagicBossGreen = 112;
MagicBossBlue = 214;

MagicBossPieceRed = 0;
MagicBossPieceGreen = 0;
MagicBossPieceBlue = 0;

magictime = 0;

let Cursed1 = false;
let Cursed2 = false;
let Cursed3 = false;
let Cursed4 = false;
Cursify = 0;
CurseTime1 = 0;
CurseTime2 = 0;
CurseTime3 = 0;
CurseTime4 = 0;
CurseDamage1 = 0;
CurseDamage2 = 0;
CurseDamage3 = 0;
CurseDamage4 = 0;

//Size 40
CurseX1 = -600;
CurseY1 = 260;
CurseX2 = 1000;
CurseY2 = 300;
CurseX3 = -600;
CurseY3 = 340;
CurseX4 = 1000;
CurseY4 = 380;
let CurseSpeed = 3;

let Heal = false;
HealTimer = 0;
MagicShotRecoil = 1;

let Restrict = false;
RestrictTimer = 0;
BarrierTimer = 0;
BarrierTurn = false;
BarrierTimerEnd = 400;

magicfightresult = 0;
/*
Neutral = 0
Win = 1
Lose = 2
*/

//Cutscene if Player Wins
MagicCutX = 200;
MagicCutY = 325;
MagicBackgroundCut = 50;
MagicBossCutX = 200;
MagicBossCutY = 100;
CutMagicRed = 218;
CutMagicGreen = 112;
CutMagicBlue = 214;
let CutMagicPieceRed = 0;
let CutMagicPieceGreen = 0;
let CutMagicPieceBlue = 0;
CutMouthUpY = 10;
CutSmileUpY = 0;
CutMouthTime = 0;
CutMouthTimeRise = 0.1;
let cutmagicspace = true;
let MagicSpeech = "huhuhu...";
MagicSpeechColorRed = 255;
MagicSpeechColorGreen = 0;
MagicSpeechSize = 40;
SpeechTiming = 0;
CutShading = 0;
//Cutscene if Boss Wins
MagicBackgroundCutCut = 50;

MagicCutCutColor = "red";
MagicQuadX1 = 200;
MagicQuadY1 = 325;
MagicQuadX2 = 200;
MagicQuadY2 = 325;
MagicQuadX3 = 200;
MagicQuadY3 = 325;
MagicQuadX4 = 200;
MagicQuadY4 = 325;

MagicBossCutCutX = 200;
MagicBossCutCutY = 100;
CutCutMagicRed = 218;
CutCutMagicGreen = 112;
CutCutMagicBlue = 214;
let CutCutMagicPieceRed = 0;
let CutCutMagicPieceGreen = 0;
let CutCutMagicPieceBlue = 0;
CutCutMouthUpY = 10;
CutCutSmileUpY = 0;
CutCutMouthTime = 0;
CutCutMouthTimeRise = 0.1;

MagicLaserX1 = 185;
MagicLaserY1 = 155;

MagicLaserX2 = 215;
MagicLaserY2 = 155;

MagicLaserX3 = 215;
MagicLaserY3 = 155;

MagicLaserX4 = 185;
MagicLaserY4 = 155;

MagicLaserRed = 218;
MagicLaserGreen = 112;
MagicLaserBlue = 214;

MagicLaserOpaque = -50;
MagicLaserOpaqueRiser = 1;

magiclasertime = 0;

TunnelCutX = 200;
TunnelCutY = -50;

let MagicCutSpace = true;

CavernCutX = 200;
CavernCutY = -50;
CavernShadow = 500;

VoidPathTextShade = 255;

MysteryOrbX = 200;
MysteryOrbY = 200;

let ShapeX1;
let ShapeY1;
let ShapeX2;
let ShapeY2;
let ShapeX3;
let ShapeY3;
let ShapeX4;
let ShapeY4;

let ShapeX5;
let ShapeY5;
let ShapeX6;
let ShapeY6;
let ShapeX7;
let ShapeY7;
let ShapeX8;
let ShapeY8;
ShapeMin = 100;
ShapeMax = 300;
ShapeColor = "yellow";

VoidScleraH = 50;
VoidScleraHeighten = 1;

VoidIrisW = 20;
VoidIrisH = 50;
VoidIrisShrink = 0.25;

let FieldEntrCutX = 200;
let FieldEntrCutY = -50;
FieldEntrCutSpeed = 1;
let FieldBossEntrX = -50;
let FieldBossEntrY = 300;
FieldBossEntrSpeed = 5;

let FieldEntrApproach = false;
let FieldEntrTime = 0;

FieldEntrDarkness = 0;
FieldEntrSkip = false;

let OceanEntrCutX = 200;
let OceanEntrCutY = 450;
OceanEntrCutSpeed = 1;
WaveEntrX = -1500;
WaveEntrY = 0;
let OceanBossEntrX = 200;
let OceanBossEntrY = -100;
OceanBossEntrSpeed = 0;

OceanEntrApproach = false;
OceanEntrDarkness = 0;
OceanEntrSkip = false;

let TundraEntrCutX = 450;
let TundraEntrCutY = 200;
TundraEntrCutSpeed = 1;

let TundraBossEntrX = 100;
let TundraBossEntrY = 200;
TundraBossEntrSpeed = 0;

//255
TundraEntrBody = 225;
//225
TundraEntrLeftEye = 225;
//145
TundraEntrRightEye = 225;

TundraEntrApproach = false;
TundraEntrDarkness = 0;

TundraEntrTimer = 0;
TundraEntrTimerRiser = 0.5;
TundraEntrSkip = false;

let DesertEntrCutX = -50;
let DesertEntrCutY = 200;
DesertEntrCutSpeed = 1;

let DesertBossEntrX = 300;
let DesertBossEntrY = 200;
DesertBossEntrSpeed = 0;
//100
let DesertBossEntrSize = 0;
let DesertBossEntrGrowth = 0;

DesertEntrApproach = false;
DesertEntrDarkness = 0;
DesertEntrTimer = 0;
DesertEntrTimerRiser = 0.5;

DesertEntrSkip = false;

function setup() {
  createCanvas(400, 400);
  MagicSpeechStyle = NORMAL;
  noStroke();
  TundraSpeed = random(3, 5);
  TundraSpeed2 = random(3, 5);
  TundraSpeed3 = random(3, 5);
  TundraSpeed4 = random(3, 5);
  TundraSpeed5 = random(3, 5);
  TundraSpeed6 = random(3, 5);
  TundraSpeed7 = random(3, 5);
  TundraSpeed8 = random(3, 5);
  TundraSpeed9 = random(3, 5);
  TundraSpeed10 = random(3, 5);

  DesertSpeed = random(1, 5);
  DesertSpeed2 = random(1, 5);
  DesertSpeed3 = random(1, 5);
  DesertSpeed4 = random(1, 5);
  DesertSpeed5 = random(1, 5);
  DesertSpeed6 = random(1, 5);
  DesertSpeed7 = random(1, 5);
  DesertSpeed8 = random(1, 5);

  Shark1Speed = random(3, 6);
  Shark2Speed = random(3, 6);
  Shark3Speed = random(3, 6);
  Shark4Speed = random(3, 6);

  HailSpeed1 = random(5, 7);
  HailSpeed2 = random(5, 7);
  HailSpeed3 = random(5, 7);
  HailSpeed5 = random(5, 7);
  HailSpeed6 = random(5, 7);

  TopSnowSpeed1 = random(5, 7);
  TopSnowSpeed2 = random(5, 7);
  TopSnowSpeed3 = random(5, 7);
  BottomSnowSpeed1 = random(5, 7);
  BottomSnowSpeed2 = random(5, 7);

  TurnPlace1 = random(20, 130);
  TurnPlace2 = random(20, 130);
  TurnPlace3 = random(20, 130);
  TurnPlace5 = random(20, 130);
  TurnPlace6 = random(20, 130);
  TurnPlace7 = random(20, 130);

  WhiteCircleReturn = random(-400, -600);
  WhiteCircleReturn2 = random(800, 1000);
  DarkRectReturn = random(2800, 4800);
  DarkRectReturn2 = random(-2800, -4800);
  DarkGreyTriReturn = random(3800, 5800);
  DarkGreyTriReturn2 = random(-3800, -5800);
  DarkGreyTriReturn3 = random(-3800, -5800);
  DarkGreyTriReturn4 = random(3800, 5800);
  WhiteRectReturn = random(4000, 6000);
  WhiteRectReturn2 = random(-4000, -6000);
  WhiteRectReturn3 = random(4000, 6000);
  WhiteRectReturn4 = random(-4000, -6000);
  WhiteRectReturn5 = random(4000, 6000);
  WhiteRectReturn6 = random(-4000, -6000);
  GreyCircleReturn = random(-5000, -7000);
  GreyCircleReturn2 = random(5100, 7100);

  RedDescent = random(MinDescent, MaxDescent);
  BlueDescent = random(MinDescent, MaxDescent);
  YellowDescent = random(MinDescent, MaxDescent);
  GreenDescent = random(MinDescent, MaxDescent);
  PurpleDescent = random(MinDescent, MaxDescent);
  OrangeDescent = random(MinDescent, MaxDescent);
  PinkDescent = random(MinDescent, MaxDescent);
  MagentaDescent = random(MinDescent, MaxDescent);
  LimeDescent = random(MinDescent, MaxDescent);

  RedStarSize = random(MinStarSize, MaxStarSize);
  BlueStarSize = random(MinStarSize, MaxStarSize);
  YellowStarSize = random(MinStarSize, MaxStarSize);
  GreenStarSize = random(MinStarSize, MaxStarSize);
  PurpleStarSize = random(MinStarSize, MaxStarSize);
  OrangeStarSize = random(MinStarSize, MaxStarSize);
  PinkStarSize = random(MinStarSize, MaxStarSize);
  MagentaStarSize = random(MinStarSize, MaxStarSize);
  LimeStarSize = random(MinStarSize, MaxStarSize);

  RedStarX = random(0, 400);
  BlueStarX = random(0, 400);
  YellowStarX = random(0, 400);
  GreenStarX = random(0, 400);
  PurpleStarX = random(0, 400);
  OrangeStarX = random(0, 400);
  PinkStarX = random(0, 400);
  MagentStarX = random(0, 400);
  LimeStarX = random(0, 400);

  ShapeX1 = random(ShapeMin, ShapeMax);
  ShapeX2 = random(ShapeMin, ShapeMax);
  ShapeX3 = random(ShapeMin, ShapeMax);
  ShapeX4 = random(ShapeMin, ShapeMax);

  ShapeY1 = random(ShapeMin, ShapeMax);
  ShapeY2 = random(ShapeMin, ShapeMax);
  ShapeY3 = random(ShapeMin, ShapeMax);
  ShapeY4 = random(ShapeMin, ShapeMax);

  ShapeX5 = random(ShapeMin, ShapeMax);
  ShapeX6 = random(ShapeMin, ShapeMax);
  ShapeX7 = random(ShapeMin, ShapeMax);
  ShapeX8 = random(ShapeMin, ShapeMax);

  ShapeY5 = random(ShapeMin, ShapeMax);
  ShapeY6 = random(ShapeMin, ShapeMax);
  ShapeY7 = random(ShapeMin, ShapeMax);
  ShapeY8 = random(ShapeMin, ShapeMax);
  
  BossOrbRotate = PI/pow(2, 3);
  
}
function draw() {
  background(220);

  if (screen == 0) {
    TitleScreen();
  }

  if (screen == 0.5) {
    welcome();
  }

  if (screen == 0.9) {
    CharacterSelect();
  }

  if (screen == 1) {
    EmptyTown();
    Arrow();
    Player();
  }

  if (screen == 2) {
    Field();
    Player();
    //FieldOrb();
    FieldObst();
  }

  if (screen == 3) {
    Ocean();
    Player();
    //OceanOrb();
    OceanObst();
  }

  if (screen == 4) {
    Tundra();
    Player();
    //TundraOrb();
    TundraObst();
  }

  if (screen == 5) {
    Desert();
    Player();
    //DesertOrb();
    DesertObst();
  }

  //if (item0 == true) {screen = 6;}

  if (screen == 6.3) {
    VoidWalkway();
  }

  if (screen == 6.6) {
    VoidHall();
  }

  if (screen == 6) {
    Void();
    Player();
    FinalBoss();
    WhiteCircle();
    GreyRectangle();
    DarkGreyTri();
    WhiteRect();
    GreyCircle();
  }

  if (screen == -2) {
    GameEnd();
  }

  if (screen == -1) {
    Death();
  }

  if (screen == -3) {
    Cutscene();
  }

  if (screen == -3.5) {
    AncientShrine();
  }

  if (screen == 2.3) {
    //Player();
    FieldBossBattle();
  }

  if (screen == 2.6) {
    FieldOrbLocation();
    FieldOrb();
    Player();
  }

  if (screen == 3.3) {
    OceanBossBattle();
  }

  if (screen == 3.6) {
    OceanOrbLocation();
    OceanOrb();
    Player();
  }

  if (screen == 4.3) {
    TundraBossBattle();
  }

  if (screen == 4.6) {
    TundraOrbLocation();
    TundraOrb();
    Player();
  }

  if (screen == 5.3) {
    DesertBossBattle();
  }

  if (screen == 5.6) {
    DesertOrbLocation();
    DesertOrb();
    Player();
  }

  if (screen == 7.5) {
    Tunnel();
    Player();
  }

  if (screen == 7.9) {
    Cavern();
  }

  if (screen == 7) {
    MagicBossBattle();
  }

  if (screen == 2.1) {
    FieldBossEntrance();
  }

  if (screen == 3.1) {
    OceanBossEntrance();
  }

  if (screen == 4.1) {
    TundraBossEntrance();
  }

  if (screen == 5.1) {
    DesertBossEntrance();
  }

  if (item1 == true && item2 == true && item3 == true && item4 == true) {
    itemAll = true;
  }

  if (itemAll == true) {
    if (screen == 1) {
      EternalOrb();
      if (y > 390) {
        y = 390;
      }

      if (x > 390) {
        x = 390;
      }

      if (x < 10) {
        x = 10;
      }

      if (y < 10) {
        y = 10;
      }
    }

    if (screen == 10) {
      EmptyTown();
      Player();
      EternalOrb();
    }
  }
}

function Player() {
  //The Player
  strokeWeight(1);
  stroke(5);
  fill(ColorCircle);
  //fill("red");
  circle(x, y, 25);
  strokeWeight(0);
  //The Controls

  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    x = x - speed;
  }

  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    x = x + speed;
  }

  if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    y = y - speed;
  }

  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
    y = y + speed;
  }
}

function welcome() {
  //The Beginning Screen
  background(GalaxyColor);
  background(0);
  /*
  if (space == true) {
    strokeWeight(0);
    //fill(255, 0, 0, 50);
    fill(50);
    circle(RedStarX, RedStarY, RedStarSize);
    //fill(0, 0, 255, 50);
    fill(100);
    circle(BlueStarX, BlueStarY, BlueStarSize);
    //fill(255, 255, 0, 50);
    fill(20);
    circle(YellowStarX, YellowStarY, YellowStarSize);
    //fill(0, 50, 0, 50);
    fill(130);
    circle(GreenStarX, GreenStarY, GreenStarSize);
    //fill(100, 0, 100, 50);
    fill(30);
    circle(PurpleStarX, PurpleStarY, PurpleStarSize);
    //fill(255, 165, 0, 50);
    fill(5);
    circle(OrangeStarX, OrangeStarY, OrangeStarSize);
    //fill(255, 192, 203, 50);
    fill(75);
    circle(PinkStarX, PinkStarY, PinkStarSize);
    //fill(255, 0, 255, 50);
    fill(120);
    circle(MagentaStarX, MagentaStarY, MagentaStarSize);
    //fill(0, 255, 0, 50);
    fill(140);
    circle(LimeStarX, LimeStarY, LimeStarSize);

    RedStarY = RedStarY + RedDescent;
    BlueStarY = BlueStarY + BlueDescent;
    YellowStarY = YellowStarY + YellowDescent;
    GreenStarY = GreenStarY + GreenDescent;
    PurpleStarY = PurpleStarY + PurpleDescent;
    OrangeStarY = OrangeStarY + OrangeDescent;
    PinkStarY = PinkStarY + PinkDescent;
    MagentaStarY = MagentaStarY + MagentaDescent;
    LimeStarY = LimeStarY + LimeDescent;
  }
  if (space == true) {
    if (RedStarY >= 450) {
      RedStarY = -100;
      RedDescent = random(MinDescent, MaxDescent);
      RedStarSize = random(MinStarSize, MaxStarSize);
      RedStarX = random(0, 400);
    }
    if (BlueStarY >= 450) {
      BlueStarY = -30;
      BlueDescent = random(MinDescent, MaxDescent);
      BlueStarSize = random(MinStarSize, MaxStarSize);
      BlueStarX = random(0, 400);
    }
    if (YellowStarY >= 450) {
      YellowStarY = -175;
      YellowDescent = random(MinDescent, MaxDescent);
      YellowStarSize = random(MinStarSize, MaxStarSize);
      YellowStarX = random(0, 400);
    }
    if (GreenStarY >= 450) {
      GreenStarY = -135;
      GreenDescent = random(MinDescent, MaxDescent);
      GreenStarSize = random(MinStarSize, MaxStarSize);
      GreenStarX = random(0, 400);
    }
    if (PurpleStarY >= 450) {
      PurpleStarY = -250;
      PurpleDescent = random(MinDescent, MaxDescent);
      PurpleStarSize = random(MinStarSize, MaxStarSize);
      PurpleStarX = random(0, 400);
    }
    if (OrangeStarY >= 450) {
      OrangeStarY = -195;
      OrangeDescent = random(MinDescent, MaxDescent);
      OrangeStarSize = random(MinStarSize, MaxStarSize);
      OrangeStarX = random(0, 400);
    }
    if (PinkStarY >= 450) {
      PinkStarY = -295;
      PinkDescent = random(MinDescent, MaxDescent);
      PinkStarSize = random(MinStarSize, MaxStarSize);
      PinkStarX = random(0, 400);
    }
    if (MagentaStarY >= 450) {
      MagentaStarY = -245;
      MagentaDescent = random(MinDescent, MaxDescent);
      MagentaStarSize = random(MinStarSize, MaxStarSize);
      MagentaStarX = random(0, 400);
    }
    if (LimeStarY >= 450) {
      LimeStarY = -300;
      LimeDescent = random(MinDescent, MaxDescent);
      LimeStarSize = random(MinStarSize, MaxStarSize);
      LimeStarX = random(0, 400);
    }
  }
  if (space == true) {
    GalaxyColor = GalaxyColor + GalacticShift;

    if (GalaxyColor <= -20) {
      GalacticShift = GalacticShift * -1;
    }

    if (GalaxyColor >= 20) {
      GalacticShift = GalacticShift * -1;
    }
  }
*/
  textSize(140);
  fill(IntroText1, 0, 0);
  text("HELP!", 0, 110);

  IntroText1 = IntroText1 + 3;

  if (IntroText1 >= 255) {
    IntroText2 = IntroText2 + 3;
  }

  if (IntroText2 >= 255) {
    IntroText3 = IntroText3 + 3;
  }

  if (IntroText3 >= 255) {
    IntroText4 = IntroText4 + 3;
  }

  if (IntroText4 >= 255) {
    IntroText5 = IntroText5 + 3;
  }

  textSize(25);
  fill(IntroText2, 0, 0);
  text(
    "All the Legendary Orbs have been stolen and scattered across the world",
    10,
    120,
    400,
    200
  );

  textSize(25);
  fill(IntroText3, 0, 0);
  text(
    "As Cardinal, you must retrieve and return them to the Ancient Shrine",
    10,
    210,
    400,
    200
  );

  textSize(55);
  fill(IntroText4, 0, 0);
  text("Are You Ready?", 1, 270, 500, 200);

  fill(0, 0, 0);
  strokeWeight(4);
  stroke(IntroText5, 0, 0);
  rect(90, 333, 230, 50);

  strokeWeight(0);
  textSize(40);
  fill(IntroText5, 0, 0);
  text("I Am Ready", 100, 340, 500, 200);

  fill(IntroText5, 0, 0);

  strokeWeight(0);
  noStroke();
  textSize(100);
  if (
    mouseX >= 90 &&
    mouseX <= 320 &&
    mouseY >= 333 &&
    mouseY <= 383 &&
    IntroText1 >= 255 &&
    IntroText2 >= 255 &&
    IntroText3 >= 255 &&
    IntroText4 >= 255 &&
    IntroText5 >= 255
  ) {
    if (mouseIsPressed) {
      screen = 0.9;
    }
  }
}
function TitleScreen() {
  background(GalaxyColor);
  //Background
  if (MainTextFill >= 500) {
    if (space == true) {
      strokeWeight(0);
      //fill(255, 0, 0, 50);
      fill(50);
      circle(RedStarX, RedStarY, RedStarSize);
      //fill(0, 0, 255, 50);
      fill(100);
      circle(BlueStarX, BlueStarY, BlueStarSize);
      //fill(255, 255, 0, 50);
      fill(20);
      circle(YellowStarX, YellowStarY, YellowStarSize);
      //fill(0, 50, 0, 50);
      fill(130);
      circle(GreenStarX, GreenStarY, GreenStarSize);
      //fill(100, 0, 100, 50);
      fill(30);
      circle(PurpleStarX, PurpleStarY, PurpleStarSize);
      //fill(255, 165, 0, 50);
      fill(5);
      circle(OrangeStarX, OrangeStarY, OrangeStarSize);
      //fill(255, 192, 203, 50);
      fill(75);
      circle(PinkStarX, PinkStarY, PinkStarSize);
      //fill(255, 0, 255, 50);
      fill(120);
      circle(MagentaStarX, MagentaStarY, MagentaStarSize);
      //fill(0, 255, 0, 50);
      fill(140);
      circle(LimeStarX, LimeStarY, LimeStarSize);

      RedStarY = RedStarY + RedDescent;
      BlueStarY = BlueStarY + BlueDescent;
      YellowStarY = YellowStarY + YellowDescent;
      GreenStarY = GreenStarY + GreenDescent;
      PurpleStarY = PurpleStarY + PurpleDescent;
      OrangeStarY = OrangeStarY + OrangeDescent;
      PinkStarY = PinkStarY + PinkDescent;
      MagentaStarY = MagentaStarY + MagentaDescent;
      LimeStarY = LimeStarY + LimeDescent;
    }
    if (space == true) {
      if (RedStarY >= 450) {
        RedStarY = -100;
        RedDescent = random(MinDescent, MaxDescent);
        RedStarSize = random(MinStarSize, MaxStarSize);
        RedStarX = random(0, 400);
      }
      if (BlueStarY >= 450) {
        BlueStarY = -30;
        BlueDescent = random(MinDescent, MaxDescent);
        BlueStarSize = random(MinStarSize, MaxStarSize);
        BlueStarX = random(0, 400);
      }
      if (YellowStarY >= 450) {
        YellowStarY = -175;
        YellowDescent = random(MinDescent, MaxDescent);
        YellowStarSize = random(MinStarSize, MaxStarSize);
        YellowStarX = random(0, 400);
      }
      if (GreenStarY >= 450) {
        GreenStarY = -135;
        GreenDescent = random(MinDescent, MaxDescent);
        GreenStarSize = random(MinStarSize, MaxStarSize);
        GreenStarX = random(0, 400);
      }
      if (PurpleStarY >= 450) {
        PurpleStarY = -250;
        PurpleDescent = random(MinDescent, MaxDescent);
        PurpleStarSize = random(MinStarSize, MaxStarSize);
        PurpleStarX = random(0, 400);
      }
      if (OrangeStarY >= 450) {
        OrangeStarY = -195;
        OrangeDescent = random(MinDescent, MaxDescent);
        OrangeStarSize = random(MinStarSize, MaxStarSize);
        OrangeStarX = random(0, 400);
      }
      if (PinkStarY >= 450) {
        PinkStarY = -295;
        PinkDescent = random(MinDescent, MaxDescent);
        PinkStarSize = random(MinStarSize, MaxStarSize);
        PinkStarX = random(0, 400);
      }
      if (MagentaStarY >= 450) {
        MagentaStarY = -245;
        MagentaDescent = random(MinDescent, MaxDescent);
        MagentaStarSize = random(MinStarSize, MaxStarSize);
        MagentaStarX = random(0, 400);
      }
      if (LimeStarY >= 450) {
        LimeStarY = -300;
        LimeDescent = random(MinDescent, MaxDescent);
        LimeStarSize = random(MinStarSize, MaxStarSize);
        LimeStarX = random(0, 400);
      }
    }
    if (space == true) {
      GalaxyColor = GalaxyColor + GalacticShift;

      if (GalaxyColor <= -20) {
        GalacticShift = GalacticShift * -1;
      }

      if (GalaxyColor >= 20) {
        GalacticShift = GalacticShift * -1;
      }
    }
  }

  fill(0, 0, 0, StarWallOpaque);
  rect(0, 0, 400, 400);

  //StarWallOpaque = StarWallOpaque - 1;

  //main text
  strokeWeight(0);
  fill(MainTextFill, 0, 0);
  textSize(65);
  text("Void Cardinal", 5, 200);
  //box
  textSize(20);
  strokeWeight(5);
  fill("black");
  stroke(0);
  rect(130, 220, 140, 50);
  //clickme

  stroke(BottomTextFill, 0, 0);
  fill(0, 0, 0);
  rect(130, 220, 140, 50);

  strokeWeight(0);
  fill(BottomTextFill, 0, 0);
  text("Click to Begin", 140, 250);

  MainTextFill = MainTextFill + 3;

  if (MainTextFill >= 500) {
    MainTextFill = 500;
    BottomTextFill = BottomTextFill + 3;
  }

  if (
    mouseX >= 130 &&
    mouseX <= 270 &&
    mouseY >= 220 &&
    mouseY <= 270 &&
    BottomTextFill >= 255
  ) {
    if (mouseIsPressed) {
      screen = 0.5;
    }
  }
}
function CharacterSelect() {
  background(GalaxyColor);
  
  /*
  if (space == true) {
    strokeWeight(0);
    fill(50);
    circle(RedStarX, RedStarY, RedStarSize);
    fill(100);
    circle(BlueStarX, BlueStarY, BlueStarSize);
    fill(20);
    circle(YellowStarX, YellowStarY, YellowStarSize);
    fill(130);
    circle(GreenStarX, GreenStarY, GreenStarSize);
    fill(30);
    circle(PurpleStarX, PurpleStarY, PurpleStarSize);
    fill(5);
    circle(OrangeStarX, OrangeStarY, OrangeStarSize);
    fill(75);
    circle(PinkStarX, PinkStarY, PinkStarSize);
    fill(120);
    circle(MagentaStarX, MagentaStarY, MagentaStarSize);
    fill(140);
    circle(LimeStarX, LimeStarY, LimeStarSize);

    RedStarY = RedStarY + RedDescent;
    BlueStarY = BlueStarY + BlueDescent;
    YellowStarY = YellowStarY + YellowDescent;
    GreenStarY = GreenStarY + GreenDescent;
    PurpleStarY = PurpleStarY + PurpleDescent;
    OrangeStarY = OrangeStarY + OrangeDescent;
    PinkStarY = PinkStarY + PinkDescent;
    MagentaStarY = MagentaStarY + MagentaDescent;
    LimeStarY = LimeStarY + LimeDescent;
  }
  
  if (space == true) {
    if (RedStarY >= 450) {
      RedStarY = -100;
      RedDescent = random(MinDescent, MaxDescent);
      RedStarSize = random(MinStarSize, MaxStarSize);
      RedStarX = random(0, 400);
    }
    if (BlueStarY >= 450) {
      BlueStarY = -30;
      BlueDescent = random(MinDescent, MaxDescent);
      BlueStarSize = random(MinStarSize, MaxStarSize);
      BlueStarX = random(0, 400);
    }
    if (YellowStarY >= 450) {
      YellowStarY = -175;
      YellowDescent = random(MinDescent, MaxDescent);
      YellowStarSize = random(MinStarSize, MaxStarSize);
      YellowStarX = random(0, 400);
    }
    if (GreenStarY >= 450) {
      GreenStarY = -135;
      GreenDescent = random(MinDescent, MaxDescent);
      GreenStarSize = random(MinStarSize, MaxStarSize);
      GreenStarX = random(0, 400);
    }
    if (PurpleStarY >= 450) {
      PurpleStarY = -250;
      PurpleDescent = random(MinDescent, MaxDescent);
      PurpleStarSize = random(MinStarSize, MaxStarSize);
      PurpleStarX = random(0, 400);
    }
    if (OrangeStarY >= 450) {
      OrangeStarY = -195;
      OrangeDescent = random(MinDescent, MaxDescent);
      OrangeStarSize = random(MinStarSize, MaxStarSize);
      OrangeStarX = random(0, 400);
    }
    if (PinkStarY >= 450) {
      PinkStarY = -295;
      PinkDescent = random(MinDescent, MaxDescent);
      PinkStarSize = random(MinStarSize, MaxStarSize);
      PinkStarX = random(0, 400);
    }
    if (MagentaStarY >= 450) {
      MagentaStarY = -245;
      MagentaDescent = random(MinDescent, MaxDescent);
      MagentaStarSize = random(MinStarSize, MaxStarSize);
      MagentaStarX = random(0, 400);
    }
    if (LimeStarY >= 450) {
      LimeStarY = -300;
      LimeDescent = random(MinDescent, MaxDescent);
      LimeStarSize = random(MinStarSize, MaxStarSize);
      LimeStarX = random(0, 400);
    }
  }
  
  if (space == true) {
    GalaxyColor = GalaxyColor + GalacticShift;

    if (GalaxyColor <= -20) {
      GalacticShift = GalacticShift * -1;
    }

    if (GalaxyColor >= 20) {
      GalacticShift = GalacticShift * -1;
    }
  }
  */
  
  if (space == true){
  strokeWeight(0);
  textSize(38);
  fill("white");
  text("Choose Your Character", 2, 40);
  textSize(20);
  text("Press 0-9", 150, 60);
  text("Are you satisfied with this character?", 35, 180, 400, 400);
  fill("black");
  strokeWeight(4);
  stroke(255);
  rect(150, 207, 100, 50);
  strokeWeight(0);
  fill("white");
  textSize(50);
  text("Yes", 157, 250);

  if (mouseX >= 150 && mouseX <= 250 && mouseY >= 207 && mouseY <= 257) {
    if (mouseIsPressed) {
      screen = 1;
      if (ColorSelect == 1) {
        ColorCircle = "red";
      }
      if (ColorSelect == 2) {
        ColorCircle = "orange";
      }
      if (ColorSelect == 3) {
        ColorCircle = "yellow";
      }
      if (ColorSelect == 4) {
        ColorCircle = "lime";
      }
      if (ColorSelect == 5) {
        ColorCircle = "green";
      }
      if (ColorSelect == 6) {
        ColorCircle = "cyan";
      }
      if (ColorSelect == 7) {
        ColorCircle = "blue";
      }
      if (ColorSelect == 8) {
        ColorCircle = "purple";
      }
      if (ColorSelect == 9) {
        ColorCircle = "magenta";
      }
      if (ColorSelect == 10) {
        ColorCircle = "pink";
      }
    }
  }

  }
  
  if (space == true){
  strokeWeight(0);
  fill("red");
  circle(RedCircleX, 140, 30);

  fill("orange");
  circle(OrangeCircleX, 140, 30);

  fill("yellow");
  circle(YellowCircleX, 140, 30);

  fill("lime");
  circle(LimeCircleX, 140, 30);

  fill("green");
  circle(GreenCircleX, 140, 30);

  fill("cyan");
  circle(CyanCircleX, 140, 30);

  fill("blue");
  circle(BlueCircleX, 140, 30);

  fill("purple");
  circle(PurpleCircleX, 140, 30);

  fill("magenta");
  circle(MagentaCircleX, 140, 30);

  fill("pink");
  circle(PinkCircleX, 140, 30);

  if (ColorSelect == 1) {
    RedCircleX = 200;
    OrangeCircleX = 600;
    YellowCircleX = 1000;
    LimeCircleX = 1400;
    GreenCircleX = 1800;
    CyanCircleX = 2200;
    BlueCircleX = 2600;
    PurpleCircleX = 3000;
    MagentaCircleX = 3400;
    PinkCircleX = 3800;
  }
  if (ColorSelect == 2) {
    RedCircleX = 3000;
    OrangeCircleX = 200;
    YellowCircleX = 600;
    LimeCircleX = 1000;
    GreenCircleX = 1400;
    CyanCircleX = 1800;
    BlueCircleX = 2200;
    PurpleCircleX = 2600;
    MagentaCircleX = 3400;
    PinkCircleX = 3800;
  }
  if (ColorSelect == 3) {
    RedCircleX = 2600;
    OrangeCircleX = 3000;
    YellowCircleX = 200;
    LimeCircleX = 600;
    GreenCircleX = 1000;
    CyanCircleX = 1400;
    BlueCircleX = 1800;
    PurpleCircleX = 2200;
    MagentaCircleX = 3400;
    PinkCircleX = 3800;
  }
  if (ColorSelect == 4) {
    RedCircleX = 2200;
    OrangeCircleX = 2600;
    YellowCircleX = 3000;
    LimeCircleX = 200;
    GreenCircleX = 600;
    CyanCircleX = 1000;
    BlueCircleX = 1400;
    PurpleCircleX = 1800;
    MagentaCircleX = 3400;
    PinkCircleX = 3800;
  }
  if (ColorSelect == 5) {
    RedCircleX = 1800;
    OrangeCircleX = 2200;
    YellowCircleX = 2600;
    LimeCircleX = 3000;
    GreenCircleX = 200;
    CyanCircleX = 600;
    BlueCircleX = 1000;
    PurpleCircleX = 1400;
    MagentaCircleX = 3400;
    PinkCircleX = 3800;
  }
  if (ColorSelect == 6) {
    RedCircleX = 1400;
    OrangeCircleX = 1800;
    YellowCircleX = 2200;
    LimeCircleX = 2600;
    GreenCircleX = 3000;
    CyanCircleX = 200;
    BlueCircleX = 600;
    PurpleCircleX = 1000;
    MagentaCircleX = 3400;
    PinkCircleX = 3800;
  }
  if (ColorSelect == 7) {
    RedCircleX = 1000;
    OrangeCircleX = 1400;
    YellowCircleX = 1800;
    LimeCircleX = 2200;
    GreenCircleX = 2600;
    CyanCircleX = 3000;
    BlueCircleX = 200;
    PurpleCircleX = 600;
    MagentaCircleX = 3400;
    PinkCircleX = 3800;
  }
  if (ColorSelect == 8) {
    RedCircleX = 600;
    OrangeCircleX = 1000;
    YellowCircleX = 1400;
    LimeCircleX = 1800;
    GreenCircleX = 2200;
    CyanCircleX = 2600;
    BlueCircleX = 3000;
    PurpleCircleX = 200;
    MagentaCircleX = 3400;
    PinkCircleX = 3800;
  }
  if (ColorSelect == 9) {
    RedCircleX = 600;
    OrangeCircleX = 1000;
    YellowCircleX = 1400;
    LimeCircleX = 1800;
    GreenCircleX = 2200;
    CyanCircleX = 2600;
    BlueCircleX = 3000;
    PurpleCircleX = 3400;
    MagentaCircleX = 200;
    PinkCircleX = 3800;
  }
  if (ColorSelect == 10) {
    RedCircleX = 600;
    OrangeCircleX = 1000;
    YellowCircleX = 1400;
    LimeCircleX = 1800;
    GreenCircleX = 2200;
    CyanCircleX = 2600;
    BlueCircleX = 3000;
    PurpleCircleX = 3800;
    MagentaCircleX = 3400;
    PinkCircleX = 200;
  }
}
  
  if (space == true){
    
  if (keyIsDown(49)) {
    ColorSelect = 1;
  }

  if (keyIsDown(50)) {
    ColorSelect = 2;
  }

  if (keyIsDown(51)) {
    ColorSelect = 3;
  }

  if (keyIsDown(52)) {
    ColorSelect = 4;
  }

  if (keyIsDown(53)) {
    ColorSelect = 5;
  }

  if (keyIsDown(54)) {
    ColorSelect = 6;
  }

  if (keyIsDown(55)) {
    ColorSelect = 7;
  }

  if (keyIsDown(56)) {
    ColorSelect = 8;
  }

  if (keyIsDown(57)) {
    ColorSelect = 9;
  }

  if (keyIsDown(48)) {
    ColorSelect = 10;
  }
  }
  
  if (space == true){
  
  //Up Arrow / W
  strokeWeight(3);
  stroke(255);
  fill(GalaxyColor);
  rect(95, 270, 80, 50, 20);
  //Down Arrow / S 
  strokeWeight(3);
  stroke(255);
  fill(GalaxyColor);
  rect(95, 330, 80, 50, 20);  
  //Left Arrow / A 
  strokeWeight(3);
  stroke(255);
  fill(GalaxyColor);
  rect(5, 330, 80, 50, 20);    
  //Right Arrow / D 
  strokeWeight(3);
  stroke(255);
  fill(GalaxyColor);
  rect(185, 330, 80, 50, 20); 
  
  strokeWeight(0);
  textSize(30);
  fill(255);
  text("W", 105, 305);
  
  strokeWeight(0);
  textSize(30);
  fill(255);
  text("S", 105, 365); 
    
  strokeWeight(0);
  textSize(30);
  fill(255);
  text("A", 15, 365);  
    
  strokeWeight(0);
  textSize(30);
  fill(255);
  text("D", 195, 365);   
    
  fill(255);  
  rect(145, 290, 10, 25);
  triangle(135, 290, 165, 290,150, 275);
    
  fill(255);
  rect(145, 335, 10, 25);
  triangle(135, 360, 165, 360,150, 375);
  
  fill(255);
  rect(55, 350, 25, 10);
  triangle(55, 340, 55, 370, 40, 355);
    
  fill(255);  
  rect(220, 350, 25, 10);  
  triangle(245, 340, 245, 370, 260, 355)
     
  fill(255); 
  textSize(30);
  text("Click to Shoot", 280, 290, 120, 200)
    
    
  }
  
}

function EmptyTown() {
  background(50);
  //The Destroyed Town
  fill(TownLetterColor);
  fill("black");
  rect(0, 0, 155, 30);
  textSize(20);
  fill("white");
  text("Destroyed Town", 5, 20);

  fill("yellow");
  circle(MysteryOrbX, MysteryOrbY, 50);

  //The way to Field
  if (y > 387.5 && item1 == false) {
    screen = 2;
    y = 50;
  }

  if (y > 387.5 && item1 == true) {
    y = 387.5;
  }

  //The way to Ocean, only if you have the Field Orb
  if (
    y < 12.5 &&
    item1 == true &&
    item2 == false &&
    i1X == 1000 &&
    i1Y == 1000
  ) {
    screen = 3;
    y = 350;
  }

  if (y < 12.5 && (item1 == false || item2 == true)) {
    y = 12.5;
  }
  //This way to Tundra, only if you have the Ocean Orb
  if (
    x < 12.5 &&
    item2 == true &&
    item3 == false &&
    i2X == 1000 &&
    i2Y == 1000
  ) {
    screen = 4;
    x = 350;
  }

  if (x < 12.5 && (item2 == false || item3 == true)) {
    x = 12.5;
  }
  //This way to Desert, only if you have the Tundra Orb
  if (
    x > 387.5 &&
    item3 == true &&
    item4 == false &&
    i3X == 1000 &&
    i3Y == 1000
  ) {
    screen = 5;
    x = 50;
  }

  if (x > 387.5 && (item3 == false || item4 == true)) {
    x = 387.5;
  }
}
function Arrow() {
  fill(DownArrowColor, DownArrowColor, DownArrowColor, DownArrowOpaque);
  noStroke();
  rect(190, 150, 20, 100);
  triangle(200, 275, 175, 250, 225, 250);

  if (item1 == true) {
    DownArrowColor = 50;
    DownArrowOpaque = 0;

    fill(UpArrowColor, UpArrowColor, UpArrowColor, UpArrowOpaque);
    noStroke();
    rect(190, 150, 20, 100);
    triangle(200, 125, 175, 150, 225, 150);
  }

  if (item1 == true && item2 == true) {
    UpArrowColor = 50;
    UpArrowOpaque = 0;

    fill(LeftArrowColor, LeftArrowColor, LeftArrowColor, LeftArrowOpaque);
    noStroke();
    rect(150, 190, 100, 20);
    triangle(125, 200, 150, 175, 150, 225);
  }

  if (item1 == true && item2 == true && item3 == true) {
    LeftArrowColor = 50;
    LeftArrowOpaque = 0;

    fill(RightArrowColor, RightArrowColor, RightArrowColor, RightArrowOpaque);
    noStroke();
    rect(150, 190, 100, 20);
    triangle(275, 200, 250, 175, 250, 225);
  }

  if (item1 == true && item2 == true && item3 == true && item4 == true) {
    RightArrowColor = 50;
    RightArrowOpaque = 0;
  }
}
function Field() {
  background("green");
  textSize(20);
  fill("black");
  rect(0, 0, 125, 30);
  fill("white");
  text("Divine Fields", 5, 20);
  //This way back to Town
  if (y < 0) {
    screen = 1;
    y = 350;
  }
  //This wall to the Boss Battle
  if (y > 400 && FieldEntrSkip == false) {
    y = 50;
    screen = 2.1;
  }
  if (y > 400 && FieldEntrSkip == true) {
    y = 50;
    screen = 2.3;
  }
  //Wall
  if (x > 387.5) {
    x = 387.5;
  }

  if (x < 12.5) {
    x = 12.5;
  }
}
function Tundra() {
  background("white");
  fill("black");
  rect(0, 0, 160, 30);
  textSize(20);
  fill("white");
  text("Fated Frostlands", 5, 20);

  if (y < 12.5) {
    y = 12.5;
  }

  if (y > 387.5) {
    y = 387.5;
  }
  //This way back to town
  if (x > 400) {
    x = 50;
    screen = 1;
  }
  //To the Boss
  if (x < 0 && TundraEntrSkip == true) {
    x = 350;
    screen = 4.3;
  }

  if (x < 0 && TundraEntrSkip == false) {
    x = 350;
    screen = 4.1;
  }
}
function Ocean() {
  background(0, 0, 50);
  fill("black");
  rect(0, 0, 125, 30);
  fill("white");
  textSize(20);
  text("Sacred Seas", 5, 20);
  //To the Boss Battle
  if (y < 0 && OceanEntrSkip == false) {
    y = 350;
    screen = 3.1;
  }

  if (y < 0 && OceanEntrSkip == true) {
    y = 350;
    screen = 3.3;
  }

  //Back to Town
  if (y > 400) {
    y = 50;
    screen = 1;
  }

  if (x > 387.5) {
    x = 387.5;
  }

  if (x < 12.5) {
    x = 12.5;
  }
}
function Desert() {
  background(225, 140, 0);
  fill("black");
  rect(0, 0, 150, 30);
  textSize(20);
  fill("white");
  text("Destiny Desert", 5, 20);

  if (y < 12.5) {
    y = 12.5;
  }

  if (y > 387.5) {
    y = 387.5;
  }
  //To the Boss
  if (x > 400 && DesertEntrSkip == true) {
    x = 50;
    screen = 5.3;
  }
  if (x > 400 && DesertEntrSkip == false) {
    x = 50;
    screen = 5.1;
  }
  //Back to town
  if (x < 0) {
    x = 350;
    screen = 1;
  }
}

function Tunnel() {
  background(109, 56, 107);
  noStroke();
  fill(101, 67, 33);
  rect(135, 0, 130, 400);
  fill(0, 0, 0, 100);
  rect(0, 0, 400, 400);
  fill(0, 0, 255);
  quad(200, 0, 170, 25, 200, 50, 230, 25);
  fill(0, 0, 255);
  quad(200, 50, 170, 75, 200, 100, 230, 75);
  fill(0, 0, 255);
  quad(200, 100, 170, 125, 200, 150, 230, 125);
  fill(0, 0, 255);
  quad(200, 150, 170, 175, 200, 200, 230, 175);
  fill(0, 0, 255);
  quad(200, 200, 170, 225, 200, 250, 230, 225);
  fill(0, 0, 255);
  quad(200, 250, 170, 275, 200, 300, 230, 275);
  fill(0, 0, 255);
  quad(200, 300, 170, 325, 200, 350, 230, 325);
  fill(0, 0, 255);
  quad(200, 350, 170, 375, 200, 400, 230, 375);
  fill(255, 255, 255, 100);
  circle(200, 400, 25);
  fill(255, 255, 255, 100);
  circle(200, 400, 45);
  fill(255, 255, 255, 100);
  circle(200, 400, 65);
  fill(255, 255, 255, 100);
  circle(200, 400, 85);
  fill(255, 255, 255, 100);
  circle(200, 400, 105);
  fill(255, 255, 255, 100);
  circle(200, 400, 125);

  fill("black");
  rect(0, 0, 95, 50);
  fill("white");
  textSize(50);
  text("???", 5, 3, 130, 50);

  if (x - 12.5 <= 135) {
    x = 147.5;
  }
  if (x + 12.5 >= 265) {
    x = 252.5;
  }

  if (y - 12.5 <= 0) {
    y = 12.5;
  }

  if (y >= 400) {
    screen = 7.9;
  }
}
function Cavern() {
  background(50, 0, 50);

  if (space == true) {
    //Main Body
    strokeWeight(0);
    fill(218, 112, 214);
    circle(200, 100, 100);
    strokeWeight(0);
    //Mouth
    fill(0);
    ellipse(200, 110, 75, 50);
    //Mouth Smiler
    fill(218, 112, 214);
    ellipse(200, 100, 75, 50);

    //Left Eye
    fill(0);
    ellipse(180, 90, 25);
    //Left Eye Curver
    fill(218, 112, 214);
    ellipse(175, 95, 25);

    //Right Eye
    fill(0);
    ellipse(220, 90, 25);
    //Right Eye Curver
    fill(218, 112, 214);
    ellipse(225, 95, 25);
  }

  fill(0, 0, 0, CavernShadow);
  rect(0, 0, 400, 400);

  fill(ColorCircle);
  circle(CavernCutX, CavernCutY, 25);

  CavernCutY = CavernCutY + 1;

  if (CavernCutY >= 325) {
    CavernCutY = 325;
    CavernShadow = CavernShadow - 2;
  }

  if (CavernShadow <= -100) {
    screen = 7;
    x = 200;
    y = 325;
  }
}

function FieldOrb() {
  fill("green");
  circle(i1X, i1Y, 20);
  //Touching the Field Orb
  if (
    x + 12.5 >= i1X - 10 &&
    x - 12.5 <= i1X + 10 &&
    y + 12.5 >= i1Y - 10 &&
    y - 12.5 <= i1Y + 10
  ) {
    i1X = 1000;
    i1Y = 1000;
    item1 = true;
  }
}
function OceanOrb() {
  fill("blue");
  circle(i2X, i2Y, 20);
  //Touching the Ocean Orb
  if (
    x + 12.5 >= i2X - 10 &&
    x - 12.5 <= i2X + 10 &&
    y + 12.5 >= i2Y - 10 &&
    y - 12.5 <= i2Y + 10
  ) {
    i2X = 1000;
    i2Y = 1000;
    item2 = true;
  }
}
function TundraOrb() {
  fill("white");
  circle(i3X, i3Y, 20);
  //Touching the Tundra Orb
  if (
    x + 12.5 >= i3X - 10 &&
    x - 12.5 <= i3X + 10 &&
    y + 12.5 >= i3Y - 10 &&
    y - 12.5 <= i3Y + 10
  ) {
    i3X = 1000;
    i3Y = 1000;
    item3 = true;
  }
}
function DesertOrb() {
  fill("orange");
  circle(i4X, i4Y, 20);
  //Touching the Desert Orb
  if (
    x + 12.5 >= i4X - 10 &&
    x - 12.5 <= i4X + 10 &&
    y + 12.5 >= i4Y - 10 &&
    y - 12.5 <= i4Y + 10
  ) {
    i4X = 1000;
    i4Y = 1000;
    item4 = true;
  }
}
function EternalOrb() {
  fill("black");
  quad(ShapeX1, ShapeY1, ShapeX2, ShapeY2, ShapeX3, ShapeY3, ShapeX4, ShapeY4);

  quad(ShapeX5, ShapeY5, ShapeX6, ShapeY6, ShapeX7, ShapeY7, ShapeX8, ShapeY8);

  if (ShapeColor == "yellow") {
    ShapeX1 = random(ShapeMin, ShapeMax);
    ShapeX2 = random(ShapeMin, ShapeMax);
    ShapeX3 = random(ShapeMin, ShapeMax);
    ShapeX4 = random(ShapeMin, ShapeMax);

    ShapeY1 = random(ShapeMin, ShapeMax);
    ShapeY2 = random(ShapeMin, ShapeMax);
    ShapeY3 = random(ShapeMin, ShapeMax);
    ShapeY4 = random(ShapeMin, ShapeMax);

    ShapeX5 = random(ShapeMin, ShapeMax);
    ShapeX6 = random(ShapeMin, ShapeMax);
    ShapeX7 = random(ShapeMin, ShapeMax);
    ShapeX8 = random(ShapeMin, ShapeMax);

    ShapeY5 = random(ShapeMin, ShapeMax);
    ShapeY6 = random(ShapeMin, ShapeMax);
    ShapeY7 = random(ShapeMin, ShapeMax);
    ShapeY8 = random(ShapeMin, ShapeMax);
  }

  fill(0);
  circle(i0X, i0Y, 50);
  textSize(15);
  TownLetterColor = 50;
  MysteryOrbX = 1000;
  MysteryOrbY = 1000;
  //fill("white");
  //text("Enter the Void", textX, textY);
  fill(0);
  //text("Within lies what scattered the Legendary Orbs", TextXX + 10, TextYY);
  //text("Prepare for Battle", TextXX + 100, TextYY + 20);
  //Entering the Void, no turning back
  if (
    x + 12.5 >= i0X - 25 &&
    x - 12.5 <= i0X + 25 &&
    y + 12.5 >= i0Y - 25 &&
    y - 12.5 <= i0Y + 25
  ) {
    i0X = 1000;
    i0Y = 1000;
    textX = 1000;
    textY = 1000;
    item0 = true;
    TextXX = 1000;
    TextYY = 1000;
    screen = 6.3;

    if (y > 390) {
      y = 390;
    }

    if (x > 390) {
      x = 390;
    }

    if (x < 10) {
      x = 10;
    }

    if (y < 10) {
      y = 10;
    }
  }
}

function VoidWalkway() {
  background(0);
  fill("black");
  rect(0, 0, 90, 40);
  fill(VoidPathTextShade);
  textSize(30);
  text("Void Path", 5, 25);
  fill(VoidPathColor);
  rect(185, 0, 30, 400);

  if (VoidWalkCutY <= 387) {
    VoidColorTiming = VoidColorTiming + VoidColorChange;
  }

  if (VoidColorTiming >= 1 && VoidColorTiming < 11) {
    VoidPathColor = "red";
  }
  if (VoidColorTiming >= 11 && VoidColorTiming < 21) {
    VoidPathColor = "orange";
  }
  if (VoidColorTiming >= 21 && VoidColorTiming < 31) {
    VoidPathColor = "yellow";
  }
  if (VoidColorTiming >= 31 && VoidColorTiming < 41) {
    VoidPathColor = "lime";
  }
  if (VoidColorTiming >= 41 && VoidColorTiming < 51) {
    VoidPathColor = "green";
  }
  if (VoidColorTiming >= 51 && VoidColorTiming < 61) {
    VoidPathColor = "cyan";
  }
  if (VoidColorTiming >= 61 && VoidColorTiming < 71) {
    VoidPathColor = "indigo";
  }
  if (VoidColorTiming >= 81 && VoidColorTiming < 91) {
    VoidPathColor = "purple";
  }
  if (VoidColorTiming >= 91 && VoidColorTiming < 101) {
    VoidPathColor = "indigo";
  }

  if (VoidColorTiming == 1) {
    VoidColorChange = VoidColorChange * 1;
  }
  if (VoidColorTiming > 101) {
    VoidColorChange = VoidColorChange * -1;
  }
  if (VoidColorTiming < 1) {
    VoidColorChange = VoidColorChange * -1;
  }

  fill(ColorCircle);
  circle(VoidWalkCutX, VoidWalkCutY, 25);
  VoidWalkCutY = VoidWalkCutY - 0.5;

  fill(VoidFieldOrbColor);
  circle(100, 350, 25);
  circle(300, 350, 25);

  if (VoidWalkCutY <= 350) {
    VoidFieldOrbColor = "green";
  }

  fill(VoidOceanOrbColor);
  circle(100, 250, 25);
  circle(300, 250, 25);

  if (VoidWalkCutY <= 250) {
    VoidOceanOrbColor = "blue";
  }

  fill(VoidTundraOrbColor);
  circle(100, 150, 25);
  circle(300, 150, 25);

  if (VoidWalkCutY <= 150) {
    VoidTundraOrbColor = "white";
  }

  fill(VoidDesertOrbColor);
  circle(100, 50, 25);
  circle(300, 50, 25);

  if (VoidWalkCutY <= 50) {
    VoidDesertOrbColor = "orange";
  }

  if (VoidWalkCutY <= -25) {
    screen = 6.6;
  }
}
function VoidHall() {
  background(0);
  fill("white");
  textSize(30);
  text("Void Hall", 5, 25);
  fill(ColorCircle);
  circle(VoidHallCutX, VoidHallCutY, 25);

  VoidHallCutY = VoidHallCutY - 0.5;

  if (VoidHallCutY <= 350) {
    VoidHallCutY = 350;
    VoidHallTransform = VoidHallTransform + 1;
  }

  if (VoidHallTransform >= 100) {
    VoidHallFieldX = VoidHallFieldX + 0.5;
    if (VoidHallFieldX >= 200) {
      VoidHallFieldX = 200;
    }
    VoidHallOceanX = VoidHallOceanX - 0.5;
    if (VoidHallOceanX <= 200) {
      VoidHallOceanX = 200;
    }
    VoidHallTundraY = VoidHallTundraY - 0.5;
    if (VoidHallTundraY <= 200) {
      VoidHallTundraY = 200;
    }
    VoidHallDesertY = VoidHallDesertY + 0.5;
    if (VoidHallDesertY >= 200) {
      VoidHallDesertY = 200;
    }
  }
  //Field
  //left
  fill(0, 255, 0);
  circle(VoidHallFieldX, 200, VoidOrbSize);
  //Ocean
  //right
  fill(0, 0, 255);
  circle(VoidHallOceanX, 200, VoidOrbSize);
  //Tundra
  //down
  fill(255);
  circle(200, VoidHallTundraY, VoidOrbSize);
  //Desert
  //up
  fill(255, 165, 0);
  circle(200, VoidHallDesertY, VoidOrbSize);

  //Final Boss
  fill(10);
  circle(VoidBossCutX, VoidBossCutY, VoidBossCutSize);
  fill(0);
  ellipse(
    VoidBossCutX,
    VoidBossCutY,
    (95 / 100) * VoidBossCutSize,
    VoidBossCutSize / 2
  );
  fill("red");
  ellipse(VoidBossCutX, VoidBossCutY, VoidBossCutSize / 5, VoidBossCutSize / 2);

  fill(255, 0, 0);
  circle(200, 200, RisingDarkness);
  circle(100, 200, RisingDarkness);
  circle(300, 200, RisingDarkness);
  circle(200, 100, RisingDarkness);
  circle(200, 300, RisingDarkness);
  circle(100, 100, RisingDarkness);
  circle(100, 300, RisingDarkness);
  circle(300, 100, RisingDarkness);
  circle(300, 300, RisingDarkness);

  if (VoidHallTransform >= 250) {
    VoidBossCutSize = VoidBossCutSize - 0.5;
    VoidOrbSize = 0;
    if (VoidBossCutSize <= 0) {
      VoidBossCutSize = 0;
    }
  }

  if (VoidHallTransform >= 500) {
    RisingDarkness = RisingDarkness + 10;
    VoidFusion = VoidFusion + 2;
  }

  if (VoidFusion >= 100) {
    screen = 6;
  }
}
function Void() {
  background(0);
  noStroke();
  //speed = 3;
  fill(VoidBarrier);
  rect(0, 250, 400, 10);
  textSize(30);
  //text("Left Click To Shoot", TipX, TipY);

  if (mouseIsPressed) {
    if (mouseButton === LEFT) shoot = true;
    shootX = x;
    shootY = y + 5;
    TipX = 1000;
    TipY = 1000;
  }
  //You can shoot now
  if (shoot == true) {
    shootY = shootY - 10;
    //Attack
    fill(ColorCircle);
    circle(shootX, shootY, 15);
  }
  //You're trapped
  if (y < 275) {
    y = 275;
    VoidBarrier = 20;
  } else {
    VoidBarrier = 0;
  }

  if (y > 387.5) {
    y = 387.5;
  }

  if (x > 386.5) {
    x = 386.5;
  }

  if (x < 13.5) {
    x = 13.5;
  }

  /*
  //Field
  //Left
  fill(BossFieldOrb);
  circle(bossX - 75, bossY, 25);
  //Ocean
  //Right
  fill(BossOceanOrb);
  circle(bossX + 75, bossY, 25);
  //Tundra
  //Down
  fill(BossTundraOrb);
  circle(bossX, bossY + 75, 25);
  //Desert
  //Up
  fill(BossDesertOrb);
  circle(bossX, bossY - 75, 25);
  */
  
  //Orb
  push();
  translate(bossX, bossY);
  rotate(BossOrbAngle);
  BossOrbAngle += BossOrbRotate;
  
  fill(BossFieldOrb);
  circle(-75, 0, 25);
  
  fill(BossOceanOrb);
  circle(75, 0, 25);
  
  fill(BossTundraOrb);
  circle(0, 75, 25);
  
  fill(BossDesertOrb);
  circle(0, -75, 25);
  
  pop(); 
  
  
  //OrbColorChange = OrbColorChange + OrbShift;

  /*
  if (OrbColorChange >= 0 && OrbColorChange <= 25) {
    BossFieldOrb = "lime";
    BossOceanOrb = "blue";
    BossTundraOrb = "white";
    BossDesertOrb = "orange";
  }
  if (OrbColorChange > 25 && OrbColorChange <= 50) {
    BossFieldOrb = "white";
    BossOceanOrb = "orange";
    BossTundraOrb = "blue";
    BossDesertOrb = "lime";
  }
  if (OrbColorChange > 50 && OrbColorChange <= 75) {
    BossFieldOrb = "blue";
    BossOceanOrb = "lime";
    BossTundraOrb = "orange";
    BossDesertOrb = "white";
  }
  if (OrbColorChange > 75 && OrbColorChange <= 100) {
    BossFieldOrb = "orange";
    BossOceanOrb = "white";
    BossTundraOrb = "lime";
    BossDesertOrb = "blue";
  }
  if (OrbColorChange > 100) {
    OrbColorChange = 0;
  }
  */
  
}
function FinalBoss() {
  fill(BossColor);
  circle(bossX, bossY, 100);
  fill(0);
  ellipse(bossX, bossY, 95, 50);
  fill("red");
  ellipse(bossX, bossY, 20, 50);
  //Boss moving left and right
  if (bossX == 200) {
    bosspeed = bosspeed * 1;
  } else if (bossX >= 310) {
    bosspeed = bosspeed * -1;
  }
  bossX = bossX + bosspeed;

  if (bossX <= 90) {
    bosspeed = bosspeed + 7;
  }
  //The Boss's Health bar
  fill("grey");
  rect(0, -30, 400, 20);
  fill(FinalBossBar);
  rect(0, -30, Health, 20);
  //Shooting the Boss
  if (
    shootX + 7.5 >= bossX - 50 &&
    shootX + 7.5 <= bossX + 50 &&
    shootY + 7.5 >= bossY - 50 &&
    shootY - 7.5 <= bossY + 50
  ) {
    Health = Health - TrueShotDamage;
  }

  if (Health > 200) {
    FinalBossBar = "green";
  }

  if (Health <= 200 && Health > 50) {
    FinalBossBar = "yellow";
  }
  if (Health <= 50) {
    FinalBossBar = "red";
  }

  //Bringing the Boss's Health to zero
  if (Health <= 0) {
    screen = -3;
  }
}

function WhiteCircle() {
  fill("white");
  circle(WhiteCirX1, WhiteCirY1, 20);

  WhiteCirY1 = WhiteCirY1 - 7;

  if (WhiteCirY1 <= WhiteCircleReturn) {
    WhiteCirY1 = 6000;
    //WhiteCircleReturn = random(-400, -600);
  }
  //Getting hit
  if (
    x + 12.5 >= WhiteCirX1 - 10 &&
    x - 12.5 <= WhiteCirX1 + 10 &&
    y + 12.5 >= WhiteCirY1 - 10 &&
    y - 12.5 <= WhiteCirY1 + 10
  ) {
    screen = -1;
    item0 = false;
    itemAll = false;
    item1 = false;
    item2 = false;
    item3 = false;
  }

  fill("white");
  circle(WhiteCirX2, WhiteCirY2, 20);

  WhiteCirY2 = WhiteCirY2 - 7;

  if (WhiteCirY2 <= WhiteCircleReturn) {
    WhiteCirY2 = 6000;
    //WhiteCircleReturn = random(-400, -600);
  }

  if (
    x + 12.5 >= WhiteCirX2 - 10 &&
    x - 12.5 <= WhiteCirX2 + 10 &&
    y + 12.5 >= WhiteCirY2 - 10 &&
    y - 12.5 <= WhiteCirY2 + 10
  ) {
    screen = -1;
    item0 = false;
    itemAll = false;
    item1 = false;
    item2 = false;
    item3 = false;
  }

  fill("white");
  circle(WhiteCirX3, WhiteCirY3, 20);

  WhiteCirY3 = WhiteCirY3 - 7;

  if (WhiteCirY3 <= WhiteCircleReturn) {
    WhiteCirY3 = 6000;
    //WhiteCircleReturn = random(-400, -600);
  }

  if (
    x + 12.5 >= WhiteCirX3 - 10 &&
    x - 12.5 <= WhiteCirX3 + 10 &&
    y + 12.5 >= WhiteCirY3 - 10 &&
    y - 12.5 <= WhiteCirY3 + 10
  ) {
    screen = -1;
    item0 = false;
    itemAll = false;
    item1 = false;
    item2 = false;
    item3 = false;
  }

  fill("white");
  circle(WhiteCirX4, WhiteCirY4, 20);

  WhiteCirY4 = WhiteCirY4 - 7;

  if (WhiteCirY4 <= WhiteCircleReturn) {
    WhiteCirY4 = 6000;
    //WhiteCircleReturn = random(-400, -600);
  }

  if (
    x + 12.5 >= WhiteCirX4 - 10 &&
    x - 12.5 <= WhiteCirX4 + 10 &&
    y + 12.5 >= WhiteCirY4 - 10 &&
    y - 12.5 <= WhiteCirY4 + 10
  ) {
    screen = -1;
    item0 = false;
    itemAll = false;
    item1 = false;
    item2 = false;
    item3 = false;
  }

  fill("white");
  circle(WhiteCirX5, WhiteCirY5, 20);

  WhiteCirY5 = WhiteCirY5 + 7;

  if (WhiteCirY5 >= WhiteCircleReturn2) {
    WhiteCirY5 = -6100;
    //WhiteCircleReturn2 = random(800, 1000);
  }

  if (
    x + 12.5 >= WhiteCirX5 - 10 &&
    x - 12.5 <= WhiteCirX5 + 10 &&
    y + 12.5 >= WhiteCirY5 - 10 &&
    y - 12.5 <= WhiteCirY5 + 10
  ) {
    screen = -1;
    item0 = false;

    itemAll = false;
    item1 = false;
    item2 = false;
    item3 = false;
  }

  fill("white");
  circle(WhiteCirX6, WhiteCirY6, 20);

  WhiteCirY6 = WhiteCirY6 + 7;

  if (WhiteCirY6 >= WhiteCircleReturn2) {
    WhiteCirY6 = -6100;
    //WhiteCircleReturn2 = random(800, 1000);
  }

  if (
    x + 12.5 >= WhiteCirX6 - 10 &&
    x - 12.5 <= WhiteCirX6 + 10 &&
    y + 12.5 >= WhiteCirY6 - 10 &&
    y - 12.5 <= WhiteCirY6 + 10
  ) {
    screen = -1;
    item0 = false;

    itemAll = false;
    item1 = false;
    item2 = false;
    item3 = false;
  }

  fill("white");
  circle(WhiteCirX7, WhiteCirY7, 20);

  WhiteCirY7 = WhiteCirY7 + 7;

  if (WhiteCirY7 >= WhiteCircleReturn2) {
    WhiteCirY7 = -6100;
    //WhiteCircleReturn2 = random(800, 1000);
  }

  if (
    x + 12.5 >= WhiteCirX7 - 10 &&
    x - 12.5 <= WhiteCirX7 + 10 &&
    y + 12.5 >= WhiteCirY7 - 10 &&
    y - 12.5 <= WhiteCirY7 + 10
  ) {
    screen = -1;
    item0 = false;
    //Death();
    itemAll = false;
    item1 = false;
    item2 = false;
    item3 = false;
  }
}
function GreyRectangle() {
  fill("grey");
  rect(GreyRectX1, GreyRectY1, 500, 70);

  GreyRectX1 = GreyRectX1 + 5;

  if (GreyRectX1 >= DarkRectReturn) {
    GreyRectX1 = -2500;
    DarkRectReturn = random(2800, 4800);
  }
  //Getting hit
  if (
    GreyRectX1 + 500 >= x - 12.5 &&
    GreyRectX1 <= x + 12.5 &&
    ((GreyRectY1 <= y + 12.5 && GreyRectY1 + 70 >= y - 12.5) ||
      (y + 12.5 <= GreyRectY1 + 70 && y + 12.5 >= GreyAttackY1))
  ) {
    screen = -1;
    item0 = false;
    itemAll = false;
    item1 = false;
    item2 = false;
    item3 = false;
  }

  fill("grey");
  rect(GreyRectX2, GreyRectY2, 500, 70);

  GreyRectX2 = GreyRectX2 - 5;

  if (GreyRectX2 <= DarkRectReturn2) {
    GreyRectX2 = 2500;
    DarkRectReturn2 = random(-2800, -4800);
  }

  if (
    GreyRectX2 + 500 >= x - 12.5 &&
    GreyRectX2 <= x + 12.5 &&
    ((GreyRectY2 <= y + 12.5 && GreyRectY2 + 70 >= y - 12.5) ||
      (y + 12.5 <= GreyRectY2 + 70 && y + 12.5 >= GreyRectY2))
  ) {
    screen = -1;
    item0 = false;
    itemAll = false;
    item1 = false;
    item2 = false;
    item3 = false;
  }
}
function DarkGreyTri() {
  fill(100);
  triangle(
    DGreyTriX1,
    DGreyTriY1,
    DGreyTriX1 - 70,
    DGreyTriY1 - 20,
    DGreyTriX1 - 70,
    DGreyTriY1 + 20
  );

  DGreyTriX1 = DGreyTriX1 + 10;

  if (DGreyTriX1 >= DarkGreyTriReturn) {
    DGreyTriX1 = -6000;
    DarkGreyTriReturn = random(3800, 5800);
  }
  //Getting hit
  if (
    DGreyTriX1 >= x - 12.5 &&
    DGreyTriX1 - 70 <= x + 12.5 &&
    ((DGreyTriY1 - 20 <= y + 12.5 && DGreyTriY1 + 20 >= y - 12.5) ||
      (y + 12.5 <= DGreyTriY1 + 20 && y + 12.5 >= DGreyTriY1 - 20))
  ) {
    screen = -1;
    item0 = false;
    itemAll = false;
    item1 = false;
    item2 = false;
    item3 = false;
  }

  fill(100);
  triangle(
    DGreyTriX2,
    DGreyTriY2,
    DGreyTriX2 + 70,
    DGreyTriY2 - 20,
    DGreyTriX2 + 70,
    DGreyTriY2 + 20
  );

  DGreyTriX2 = DGreyTriX2 - 10;

  if (DGreyTriX2 <= DarkGreyTriReturn2) {
    DGreyTriX2 = 6400;
    DarkGreyTriReturn2 = random(-3800, -5800);
  }

  if (
    DGreyTriX2 <= x - 12.5 &&
    DGreyTriX2 + 70 >= x + 12.5 &&
    ((DGreyTriY2 - 20 <= y + 12.5 && DGreyTriY2 + 20 >= y - 12.5) ||
      (y + 12.5 <= DGreyTriY2 + 20 && y + 12.5 >= DGreyTriY2 - 20))
  ) {
    screen = -1;
    item0 = false;
    itemAll = false;
    item1 = false;
    item2 = false;
    item3 = false;
  }

  fill(100);
  triangle(
    DGreyTriX3,
    DGreyTriY3,
    DGreyTriX3 + 20,
    DGreyTriY3 + 70,
    DGreyTriX3 - 20,
    DGreyTriY3 + 70
  );

  DGreyTriY3 = DGreyTriY3 - 10;

  if (DGreyTriY3 <= DarkGreyTriReturn3) {
    DGreyTriY3 = 6400;
    DarkGreyTriReturn3 = random(-3800, -5800);
  }

  if (
    DGreyTriX3 >= x - 12.5 &&
    DGreyTriX3 - 20 <= x + 12.5 &&
    ((DGreyTriY3 - 20 <= y + 12.5 && DGreyTriY3 + 20 >= y - 12.5) ||
      (y + 12.5 <= DGreyTriY3 + 20 && y + 12.5 >= DGreyTriY3 - 20))
  ) {
    screen = -1;
    item0 = false;
    itemAll = false;
    item1 = false;
    item2 = false;
    item3 = false;
  }
  //The Ruse Attack
  fill(50);
  triangle(
    DGreyTriX4,
    DGreyTriY4,
    DGreyTriX4 + 20,
    DGreyTriY4 - 70,
    DGreyTriX4 - 20,
    DGreyTriY4 - 70
  );

  DGreyTriY4 = DGreyTriY4 + 10;

  if (DGreyTriY4 >= DarkGreyTriReturn4) {
    DGreyTriY4 = -6000;
    DarkGreyTriReturn4 = random(3800, 5800);
  }

  if (
    DGreyTriX4 >= x - 12.5 &&
    DGreyTriX4 + 70 <= x + 12.5 &&
    ((DGreyTriY4 - 20 <= y + 12.5 && DGreyTriY4 + 20 >= y - 12.5) ||
      (y + 12.5 <= DGreyTriY4 + 20 && y + 12.5 >= DGreyTriY4 - 20))
  ) {
    screen = -1;
    item0 = false;
    itemAll = false;
    item1 = false;
    item2 = false;
    item3 = false;
  }
}
function WhiteRect() {
  fill("white");
  rect(WhiteRectX1, WhiteRectY1, 20, 70);

  WhiteRectX1 = WhiteRectX1 + 6;

  if (WhiteRectX1 >= WhiteRectReturn) {
    WhiteRectX1 = -3800;
    WhiteRectReturn = random(4000, 6000);
  }
  //Getting hit
  if (
    WhiteRectX1 + 20 >= x - 12.5 &&
    WhiteRectX1 <= x + 12.5 &&
    ((WhiteRectY1 <= y + 12.5 && WhiteRectY1 + 70 >= y - 12.5) ||
      (y + 12.5 <= WhiteRectY1 + 70 && y + 12.5 >= WhiteRectY1))
  ) {
    screen = -1;
    item0 = false;
    itemAll = false;
    item1 = false;
    item2 = false;
    item3 = false;
  }

  fill("white");
  rect(WhiteRectX2, WhiteRectY2, 20, 70);

  WhiteRectX2 = WhiteRectX2 - 6;

  if (WhiteRectX2 <= WhiteRectReturn2) {
    WhiteRectX2 = 4000;
    WhiteRectReturn2 = random(-4000, -6000);
  }

  if (
    WhiteRectX2 + 20 >= x - 12.5 &&
    WhiteRectX2 <= x + 12.5 &&
    ((WhiteRectY2 <= y + 12.5 && WhiteRectY2 + 70 >= y - 12.5) ||
      (y + 12.5 <= WhiteRectY2 + 70 && y + 12.5 >= WhiteRectY2))
  ) {
    screen = -1;
    item0 = false;
    itemAll = false;
    item1 = false;
    item2 = false;
    item3 = false;
  }

  fill("white");
  rect(WhiteRectX3, WhiteRectY3, 20, 70);

  WhiteRectX3 = WhiteRectX3 + 6;

  if (WhiteRectX3 >= WhiteRectReturn3) {
    WhiteRectX3 = -4200;
    WhiteRectReturn3 = random(4000, 6000);
  }

  if (
    WhiteRectX3 + 20 >= x - 12.5 &&
    WhiteRectX3 <= x + 12.5 &&
    ((WhiteRectY3 <= y + 12.5 && WhiteRectY3 + 70 >= y - 12.5) ||
      (y + 12.5 <= WhiteRectY3 + 70 && y + 12.5 >= WhiteRectY3))
  ) {
    screen = -1;
    item0 = false;
    itemAll = false;
    item1 = false;
    item2 = false;
    item3 = false;
  }

  fill("white");
  rect(WhiteRectX4, WhiteRectY4, 20, 70);

  WhiteRectX4 = WhiteRectX4 - 6;

  if (WhiteRectX4 <= WhiteRectReturn4) {
    WhiteRectX4 = 4400;
    WhiteRectReturn4 = random(-4000, -6000);
  }

  if (
    WhiteRectX4 + 20 >= x - 12.5 &&
    WhiteRectX4 <= x + 12.5 &&
    ((WhiteRectY4 <= y + 12.5 && WhiteRectY4 + 70 >= y - 12.5) ||
      (y + 12.5 <= WhiteRectY4 + 70 && y + 12.5 >= WhiteRectY4))
  ) {
    screen = -1;
    item0 = false;
    itemAll = false;
    item1 = false;
    item2 = false;
    item3 = false;
  }

  fill("white");
  rect(WhiteRectX5, WhiteRectY5, 20, 70);

  WhiteRectX5 = WhiteRectX5 + 6;

  if (WhiteRectX5 >= WhiteRectReturn5) {
    WhiteRectX5 = -4600;
    WhiteRectReturn5 = random(4000, 6000);
  }

  if (
    WhiteRectX5 + 20 >= x - 12.5 &&
    WhiteRectX5 <= x + 12.5 &&
    ((WhiteRectY5 <= y + 12.5 && WhiteRectY5 + 70 >= y - 12.5) ||
      (y + 12.5 <= WhiteRectY5 + 70 && y + 12.5 >= WhiteRectY5))
  ) {
    screen = -1;
    item0 = false;
    itemAll = false;
    item1 = false;
    item2 = false;
    item3 = false;
  }

  fill("white");
  rect(WhiteRectX6, WhiteRectY6, 20, 70);

  WhiteRectX6 = WhiteRectX6 - 6;

  if (WhiteRectX6 <= WhiteRectReturn6) {
    WhiteRectX6 = 4800;
    WhiteRectReturn6 = random(-4000, -6000);
  }

  if (
    WhiteRectX6 + 20 >= x - 12.5 &&
    WhiteRectX6 <= x + 12.5 &&
    ((WhiteRectY6 <= y + 12.5 && WhiteRectY6 + 70 >= y - 12.5) ||
      (y + 12.5 <= WhiteRectY6 + 70 && y + 12.5 >= WhiteRectY6))
  ) {
    screen = -1;
    item0 = false;
    itemAll = false;
    item1 = false;
    item2 = false;
    item3 = false;
  }
}
function GreyCircle() {
  fill("grey");
  circle(GreyCircleX1, GreyCircleY1, 140);
  
  let GreyCircleDistance1 = dist(x, y, GreyCircleX1, GreyCircleY1);

  
  
  if (GreyCircleX1 >= 130) {
    GreyCircleX1 = GreyCircleReturn;
    GreyCircleReturn = random(-5000, -7000);
  }

  GreyCircleX1 = GreyCircleX1 + 5;
  //Getting hit
  
  /*
  if (
    x + 12.5 >= GreyCircleX1 - 70 &&
    x - 12.5 <= GreyCircleX1 + 70 &&
    y + 12.5 >= GreyCircleY1 - 70 &&
    y - 12.5 <= GreyCircleY1 + 70
  ) {
    screen = -1;
    item0 = false;
    itemAll = false;
    item1 = false;
    item2 = false;
    item3 = false;
  }
  */
  
  if (GreyCircleDistance1 <= 70){
    screen = -1;
    item0 = false;
    itemAll = false;
    item1 = false;
    item2 = false;
    item3 = false;
  }
  
  fill("grey");
  circle(GreyCircleX2, GreyCircleY2, 140);

  let GreyCircleDistance2 = dist(x, y, GreyCircleX2, GreyCircleY2);
  
  if (GreyCircleX2 <= 270) {
    GreyCircleX2 = GreyCircleReturn2;
    GreyCircleReturn2 = random(5100, 7100);
  }

  GreyCircleX2 = GreyCircleX2 - 5;

  /*
  if (
    x + 12.5 >= GreyCircleX2 - 70 &&
    x - 12.5 <= GreyCircleX2 + 70 &&
    y + 12.5 >= GreyCircleY2 - 70 &&
    y - 12.5 <= GreyCircleY2 + 70
  ) {
    screen = -1;
    item0 = false;
    itemAll = false;
    item1 = false;
    item2 = false;
    item3 = false;
  }
  */
  
  if (GreyCircleDistance2 <= 70){
    screen = -1;
    item0 = false;
    itemAll = false;
    item1 = false;
    item2 = false;
    item3 = false;
  }
  
}

function FieldObst() {
  //The tree logs moving back and forth. Where did they come from?
  fill("brown");
  rect(FieldX1, FieldY1, 400, 40);

  FieldX1 = FieldX1 + FieldSpeed;

  if (FieldX1 + 400 <= 10) {
    FieldSpeed = FieldSpeed * -1;
  }

  if (FieldX1 + 400 >= 400) {
    FieldSpeed = FieldSpeed * -1;
  }

  if (
    FieldX1 + 400 >= x - 12.5 &&
    FieldX1 <= x + 12.5 &&
    ((FieldY1 <= y + 12.5 && FieldY1 + 40 >= y - 12.5) ||
      (y + 12.5 <= FieldY1 + 40 && y + 12.5 >= FieldY1))
  ) {
    y = 50;
    item1 = false;
    i1X = 200;
    i1Y = 380;
  }

  fill("brown");
  rect(FieldX2, FieldY2, 400, 40);

  FieldX2 = FieldX2 - FieldSpeed2;

  if (FieldX2 >= 400) {
    FieldSpeed2 = FieldSpeed2 * -1;
  }

  if (FieldX2 <= 10) {
    FieldSpeed2 = FieldSpeed2 * -1;
  }

  if (
    FieldX2 + 400 >= x - 12.5 &&
    FieldX2 <= x + 12.5 &&
    ((FieldY2 <= y + 12.5 && FieldY2 + 40 >= y - 12.5) ||
      (y + 12.5 <= FieldY2 + 40 && y + 12.5 >= FieldY2))
  ) {
    y = 50;
    item1 = false;
    i1X = 200;
    i1Y = 380;
  }

  fill("brown");
  rect(FieldX3, FieldY3, 400, 40);

  FieldX3 = FieldX3 + FieldSpeed3;

  if (FieldX3 + 400 <= 10) {
    FieldSpeed3 = FieldSpeed3 * -1;
  }

  if (FieldX3 + 400 >= 400) {
    FieldSpeed3 = FieldSpeed3 * -1;
  }

  if (
    FieldX3 + 400 >= x - 12.5 &&
    FieldX3 <= x + 12.5 &&
    ((FieldY3 <= y + 12.5 && FieldY3 + 40 >= y - 12.5) ||
      (y + 12.5 <= FieldY3 + 40 && y + 12.5 >= FieldY3))
  ) {
    y = 50;
    item1 = false;
    i1X = 200;
    i1Y = 380;
  }
}
function OceanObst() {
  //The waves coming towards you. Why are they so strong?
  fill(0, 0, 10);
  rect(OceanX1, OceanY1, 200, 10);

  OceanY1 = OceanY1 + OceanSpeed;

  if (OceanY1 >= 340) {
    OceanY1 = -100;
  }

  if (
    OceanX1 + 200 >= x - 12.5 &&
    OceanX1 <= x + 12.5 &&
    ((OceanY1 <= y + 12.5 && OceanY1 + 10 >= y - 12.5) ||
      (y + 12.5 <= OceanY1 + 10 && y + 12.5 >= OceanY1))
  ) {
    y = 350;
    item2 = false;
    i2X = 200;
    i2Y = 20;
  }

  fill(0, 0, 10);
  rect(OceanX2, OceanY2, 200, 10);

  OceanY2 = OceanY2 + OceanSpeed2;

  if (OceanY2 >= 340) {
    OceanY2 = -200;
  }

  if (
    OceanX2 + 200 >= x - 12.5 &&
    OceanX2 <= x + 12.5 &&
    ((OceanY2 <= y + 12.5 && OceanY2 + 10 >= y - 12.5) ||
      (y + 12.5 <= OceanY2 + 10 && y + 12.5 >= OceanY2))
  ) {
    y = 350;
    item2 = false;
    i2X = 200;
    i2Y = 20;
  }
}
function TundraObst() {
  //Hail falling on you. Why are they so big?
  fill(200);
  rect(TundraX1, TundraY1, 20, 20);

  TundraY1 = TundraY1 + TundraSpeed;

  if (TundraY1 >= 430) {
    TundraY1 = -40;
    TundraSpeed = random(3, 5);
  }

  if (
    TundraX1 + 20 >= x - 12.5 &&
    TundraX1 <= x + 12.5 &&
    ((TundraY1 <= y + 12.5 && TundraY1 + 20 >= y - 12.5) ||
      (y + 12.5 <= TundraY1 + 20 && y + 12.5 >= TundraY1))
  ) {
    x = 350;
    item3 = false;
    i3X = 20;
    i3Y = 200;
  }

  fill(200);
  rect(TundraX2, TundraY2, 20, 20);

  TundraY2 = TundraY2 + TundraSpeed2;

  if (TundraY2 >= 430) {
    TundraY2 = -40;
    TundraSpeed2 = random(3, 5);
  }

  if (
    TundraX2 + 20 >= x - 12.5 &&
    TundraX2 <= x + 12.5 &&
    ((TundraY2 <= y + 12.5 && TundraY2 + 20 >= y - 12.5) ||
      (y + 12.5 <= TundraY2 + 20 && y + 12.5 >= TundraY2))
  ) {
    x = 350;
    item3 = false;
    i3X = 20;
    i3Y = 200;
  }

  fill(200);
  rect(TundraX3, TundraY3, 20, 20);

  TundraY3 = TundraY3 + TundraSpeed3;

  if (TundraY3 >= 430) {
    TundraY3 = -40;
    TundraSpeed3 = random(3, 5);
  }

  if (
    TundraX3 + 20 >= x - 12.5 &&
    TundraX3 <= x + 12.5 &&
    ((TundraY3 <= y + 12.5 && TundraY3 + 20 >= y - 12.5) ||
      (y + 12.5 <= TundraY3 + 20 && y + 12.5 >= TundraY3))
  ) {
    x = 350;
    item3 = false;
    i3X = 20;
    i3Y = 200;
  }

  fill(200);
  rect(TundraX4, TundraY4, 20, 20);

  TundraY4 = TundraY4 + TundraSpeed4;

  if (TundraY4 >= 430) {
    TundraY4 = -40;
    TundraSpeed4 = random(3, 5);
  }

  if (
    TundraX4 + 20 >= x - 12.5 &&
    TundraX4 <= x + 12.5 &&
    ((TundraY4 <= y + 12.5 && TundraY4 + 20 >= y - 12.5) ||
      (y + 12.5 <= TundraY4 + 20 && y + 12.5 >= TundraY4))
  ) {
    x = 350;
    item3 = false;
    i3X = 20;
    i3Y = 200;
  }

  fill(200);
  rect(TundraX5, TundraY5, 20, 20);

  TundraY5 = TundraY5 + TundraSpeed5;

  if (TundraY5 >= 430) {
    TundraY5 = -40;
    TundraSpeed5 = random(3, 5);
  }

  if (
    TundraX5 + 20 >= x - 12.5 &&
    TundraX5 <= x + 12.5 &&
    ((TundraY5 <= y + 12.5 && TundraY5 + 20 >= y - 12.5) ||
      (y + 12.5 <= TundraY5 + 20 && y + 12.5 >= TundraY5))
  ) {
    x = 350;
    item3 = false;
    i3X = 20;
    i3Y = 200;
  }

  fill(200);
  rect(TundraX6, TundraY6, 20, 20);

  TundraY6 = TundraY6 + TundraSpeed6;

  if (TundraY6 >= 430) {
    TundraY6 = -40;
    TundraSpeed6 = random(3, 5);
  }

  if (
    TundraX6 + 20 >= x - 12.5 &&
    TundraX6 <= x + 12.5 &&
    ((TundraY6 <= y + 12.5 && TundraY6 + 20 >= y - 12.5) ||
      (y + 12.5 <= TundraY6 + 20 && y + 12.5 >= TundraY6))
  ) {
    x = 350;
    item3 = false;
    i3X = 20;
    i3Y = 200;
  }

  fill(200);
  rect(TundraX7, TundraY7, 20, 20);

  TundraY7 = TundraY7 + TundraSpeed7;

  if (TundraY7 >= 430) {
    TundraY7 = -40;
    TundraSpeed7 = random(3, 5);
  }

  if (
    TundraX7 + 20 >= x - 12.5 &&
    TundraX7 <= x + 12.5 &&
    ((TundraY7 <= y + 12.5 && TundraY7 + 20 >= y - 12.5) ||
      (y + 12.5 <= TundraY7 + 20 && y + 12.5 >= TundraY7))
  ) {
    x = 350;
    item3 = false;
    i3X = 20;
    i3Y = 200;
  }

  fill(200);
  rect(TundraX8, TundraY8, 20, 20);

  TundraY8 = TundraY8 + TundraSpeed8;

  if (TundraY8 >= 430) {
    TundraY8 = -40;
    TundraSpeed8 = random(3, 5);
  }

  if (
    TundraX8 + 20 >= x - 12.5 &&
    TundraX8 <= x + 12.5 &&
    ((TundraY8 <= y + 12.5 && TundraY8 + 20 >= y - 12.5) ||
      (y + 12.5 <= TundraY8 + 20 && y + 12.5 >= TundraY8))
  ) {
    x = 350;
    item3 = false;
    i3X = 20;
    i3Y = 200;
  }

  fill(200);
  rect(TundraX9, TundraY9, 20, 20);

  TundraY9 = TundraY9 + TundraSpeed9;

  if (TundraY9 >= 430) {
    TundraY9 = -40;
    TundraSpeed9 = random(3, 5);
  }

  if (
    TundraX9 + 20 >= x - 12.5 &&
    TundraX9 <= x + 12.5 &&
    ((TundraY9 <= y + 12.5 && TundraY9 + 20 >= y - 12.5) ||
      (y + 12.5 <= TundraY9 + 20 && y + 12.5 >= TundraY9))
  ) {
    x = 350;
    item3 = false;
    i3X = 20;
    i3Y = 200;
  }

  fill(200);
  rect(TundraX10, TundraY10, 20, 20);

  TundraY10 = TundraY10 + TundraSpeed10;

  if (TundraY10 >= 430) {
    TundraY10 = -40;
    TundraSpeed10 = random(3, 5);
  }

  if (
    TundraX10 + 20 >= x - 12.5 &&
    TundraX10 <= x + 12.5 &&
    ((TundraY10 <= y + 12.5 && TundraY10 + 20 >= y - 12.5) ||
      (y + 12.5 <= TundraY10 + 20 && y + 12.5 >= TundraY10))
  ) {
    x = 350;
    item3 = false;
    i3X = 20;
    i3Y = 200;
  }
}
function DesertObst() {
  //Sand Spikes launching at you. Somethings not Right...
  fill("orange");
  triangle(
    DesertX1,
    DesertY1,
    DesertX1 + 70,
    DesertY1 + 20,
    DesertX1 + 70,
    DesertY1 - 20
  );

  DesertX1 = DesertX1 - DesertSpeed;

  if (DesertX1 <= 50) {
    DesertX1 = 400;
    DesertSpeed = random(1, 5);
  }

  if (
    DesertX1 <= x - 12.5 &&
    DesertX1 + 70 >= x + 12.5 &&
    ((DesertY1 - 20 <= y + 12.5 && DesertY1 + 20 >= y - 12.5) ||
      (y + 12.5 <= DesertY1 + 20 && y + 12.5 >= DesertY1 - 20))
  ) {
    x = 50;
    item4 = false;
    i4X = 380;
    i4Y = 200;
    if (itemAll == true) {
      itemAll = false;
    }
  }

  fill("orange");
  triangle(
    DesertX2,
    DesertY2,
    DesertX2 + 70,
    DesertY2 + 20,
    DesertX2 + 70,
    DesertY2 - 20
  );

  DesertX2 = DesertX2 - DesertSpeed2;

  if (DesertX2 <= 50) {
    DesertX2 = 450;
    DesertSpeed2 = random(1, 5);
  }

  if (
    DesertX2 <= x - 12.5 &&
    DesertX2 + 70 >= x + 12.5 &&
    ((DesertY2 - 20 <= y + 12.5 && DesertY2 + 20 >= y - 12.5) ||
      (y + 12.5 <= DesertY2 + 20 && y + 12.5 >= DesertY2 - 20))
  ) {
    x = 50;
    item4 = false;
    i4X = 380;
    i4Y = 200;
    if (itemAll == true) {
      itemAll = false;
    }
  }

  fill("orange");
  triangle(
    DesertX3,
    DesertY3,
    DesertX3 + 70,
    DesertY3 + 20,
    DesertX3 + 70,
    DesertY3 - 20
  );

  DesertX3 = DesertX3 - DesertSpeed3;

  if (DesertX3 <= 50) {
    DesertX3 = 500;
    DesertSpeed3 = random(1, 5);
  }

  if (
    DesertX3 <= x - 12.5 &&
    DesertX3 + 70 >= x + 12.5 &&
    ((DesertY3 - 20 <= y + 12.5 && DesertY3 + 20 >= y - 12.5) ||
      (y + 12.5 <= DesertY3 + 20 && y + 12.5 >= DesertY3 - 20))
  ) {
    x = 50;
    item4 = false;
    i4X = 380;
    i4Y = 200;
    if (itemAll == true) {
      itemAll = false;
    }
  }

  fill("orange");
  triangle(
    DesertX4,
    DesertY4,
    DesertX4 + 70,
    DesertY4 + 20,
    DesertX4 + 70,
    DesertY4 - 20
  );

  DesertX4 = DesertX4 - DesertSpeed4;

  if (DesertX4 <= 50) {
    DesertX4 = 550;
    DesertSpeed4 = random(1, 5);
  }

  if (
    DesertX4 <= x - 12.5 &&
    DesertX4 + 70 >= x + 12.5 &&
    ((DesertY4 - 20 <= y + 12.5 && DesertY4 + 20 >= y - 12.5) ||
      (y + 12.5 <= DesertY4 + 20 && y + 12.5 >= DesertY4 - 20))
  ) {
    x = 50;
    item4 = false;
    i4X = 380;
    i4Y = 200;
    if (itemAll == true) {
      itemAll = false;
    }
  }

  fill("orange");
  triangle(
    DesertX5,
    DesertY5,
    DesertX5 + 70,
    DesertY5 + 20,
    DesertX5 + 70,
    DesertY5 - 20
  );

  DesertX5 = DesertX5 - DesertSpeed5;

  if (DesertX5 <= 50) {
    DesertX5 = 600;
    DesertSpeed5 = random(1, 5);
  }

  if (
    DesertX5 <= x - 12.5 &&
    DesertX5 + 70 >= x + 12.5 &&
    ((DesertY5 - 20 <= y + 12.5 && DesertY5 + 20 >= y - 12.5) ||
      (y + 12.5 <= DesertY5 + 20 && y + 12.5 >= DesertY5 - 20))
  ) {
    x = 50;
    item4 = false;
    i4X = 380;
    i4Y = 200;
    if (itemAll == true) {
      itemAll = false;
    }
  }

  fill("orange");
  triangle(
    DesertX6,
    DesertY6,
    DesertX6 + 70,
    DesertY6 + 20,
    DesertX6 + 70,
    DesertY6 - 20
  );

  DesertX6 = DesertX6 - DesertSpeed6;

  if (DesertX6 <= 50) {
    DesertX6 = 650;
    DesertSpeed6 = random(1, 5);
  }

  if (
    DesertX6 <= x - 12.5 &&
    DesertX6 + 70 >= x + 12.5 &&
    ((DesertY6 - 20 <= y + 12.5 && DesertY6 + 20 >= y - 12.5) ||
      (y + 12.5 <= DesertY6 + 20 && y + 12.5 >= DesertY6 - 20))
  ) {
    x = 50;
    item4 = false;
    i4X = 380;
    i4Y = 200;
    if (itemAll == true) {
      itemAll = false;
    }
  }

  fill("orange");
  triangle(
    DesertX7,
    DesertY7,
    DesertX7 + 70,
    DesertY7 + 20,
    DesertX7 + 70,
    DesertY7 - 20
  );

  DesertX7 = DesertX7 - DesertSpeed7;

  if (DesertX7 <= 50) {
    DesertX7 = 650;
    DesertSpeed7 = random(1, 5);
  }

  if (
    DesertX7 <= x - 12.5 &&
    DesertX7 + 70 >= x + 12.5 &&
    ((DesertY7 - 20 <= y + 12.5 && DesertY7 + 20 >= y - 12.5) ||
      (y + 12.5 <= DesertY7 + 20 && y + 12.5 >= DesertY7 - 20))
  ) {
    x = 50;
    item4 = false;
    i4X = 380;
    i4Y = 200;
    if (itemAll == true) {
      itemAll = false;
    }
  }

  fill("orange");
  triangle(
    DesertX8,
    DesertY8,
    DesertX8 + 70,
    DesertY8 + 20,
    DesertX8 + 70,
    DesertY8 - 20
  );

  DesertX8 = DesertX8 - DesertSpeed8;

  if (DesertX8 <= 50) {
    DesertX8 = 650;
    DesertSpeed8 = random(1, 5);
  }

  if (
    DesertX8 <= x - 12.5 &&
    DesertX8 + 70 >= x + 12.5 &&
    ((DesertY8 - 20 <= y + 12.5 && DesertY8 + 20 >= y - 12.5) ||
      (y + 12.5 <= DesertY8 + 20 && y + 12.5 >= DesertY8 - 20))
  ) {
    x = 50;
    item4 = false;
    i4X = 380;
    i4Y = 200;
    if (itemAll == true) {
      itemAll = false;
    }
  }
}

function GameEnd() {
  //To be Continued
  background(0);
  fill(255, 0, 0);
  textSize(55);
  text("To be Continued", 0, 200);
}
function Death() {
  background("black");
  textSize(30);
  fill(TextColor);
  text("Your time to die has not come", TimeHasntComeX, 175);
  textSize(96);
  fill(TextColor2);
  text("RETURN", 2, ReturnY);
  
  DeathColor = DeathColor + 5;

  if (DeathColor >= 50) {
    DeathColor = 50;
  }

  if (DeathColor == 50) {
    TextColor = TextColor + 5;
  }

  if (TextColor >= 255) {
    TextColor = 255;
  }

  if (DeathColor == 50 && TextColor == 255) {
    TextColor2 = TextColor2 + 5;
  }

  if (TextColor2 >= 255) {
    TextColor2 = 255;
  }

  if (
    mouseIsPressed &&
    TextColor == 255 &&
    DeathColor == 50 &&
    TextColor2 == 255
  ) {
    screen = 6;
    speed = 3;
    TimeHasntComeX = 500;
    ReturnY = 240;
    //EternalOrb();
    Health = 400;
    x = 200;
    y = 300;
    TextColor = 0;
    //DeathColor = 0;
    //TextColor2 = 0;
    WhiteCirX1 = 50;
    WhiteCirY1 = 1000;
    WhiteCirX2 = 150;
    WhiteCirY2 = 1000;
    WhiteCirX3 = 250;
    WhiteCirY3 = 1000;
    WhiteCirX4 = 350;
    WhiteCirY4 = 1000;
    WhiteCirX5 = 100;
    WhiteCirY5 = -800;
    WhiteCirX6 = 200;
    WhiteCirY6 = -800;
    WhiteCirX7 = 300;
    WhiteCirY7 = -800;

    GreyRectX1 = -1500;
    GreyRectY1 = 260;
    GreyRectX2 = 2100;
    GreyRectY2 = 330;

    DGreyTriX1 = -4800;
    DGreyTriY1 = 330;
    DGreyTriX2 = 5200;
    DGreyTriY2 = 330;
    DGreyTriX3 = 200;
    DGreyTriY3 = 5200;
    DGreyTriX4 = 200;
    DGreyTriY4 = -4600;

    WhiteRectX1 = -3800;
    WhiteRectY1 = 260;
    WhiteRectX2 = 4500;
    WhiteRectY2 = 330;
    WhiteRectX3 = -4500;
    WhiteRectY3 = 260;
    WhiteRectX4 = 5200;
    WhiteRectY4 = 330;
    WhiteRectX5 = -5200;
    WhiteRectY5 = 260;
    WhiteRectX6 = 5900;
    WhiteRectY6 = 330;

    GreyCircleX1 = -6000;
    GreyCircleY1 = 330;
    GreyCircleX2 = 7000;
    GreyCircleY2 = 330;
  }
}
function Cutscene() {
  background(0);

  fill(BossColor);
  noStroke();
  arc(HalfBossX1, HalfBossY1, 100, 100, 0, HALF_PI);
  arc(HalfBossX2, HalfBossY2, 100, 100, HALF_PI, PI);
  arc(HalfBossX3, HalfBossY3, 100, 100, PI, PI + HALF_PI);
  arc(HalfBossX4, HalfBossY4, 100, 100, PI + HALF_PI, 0);
  fill(0);
  ellipse(VoidEyeX, 100, 95, VoidScleraH);
  fill("red");
  ellipse(VoidEyeX, 100, VoidIrisW, VoidIrisH);

  /* 
  VoidScleraH = 50;
  VoidScleraHeighten = 2;
  VoidIrisW = 20;
  VoidIrisH = 50;
  VoidIrisShrink = 0.5;
  */

  if (TrueLaserHeight <= -40) {
    VoidIrisW = VoidIrisW - VoidIrisShrink;
    VoidIrisH = VoidIrisH - VoidIrisShrink * 2;
  }

  if (VoidIrisW <= 10) {
    VoidIrisW = 10;
  }

  if (VoidIrisH <= 25) {
    VoidIrisH = 25;
  }

  if (TrueLaserHeight <= -50) {
    VoidScleraH = VoidScleraH + VoidScleraHeighten;
  }

  if (VoidScleraH >= 90) {
    VoidScleraH = 90;
  }

  noStroke();
  fill(ColorCircle);
  circle(200, BallCutY, 25);

  fill("lime");
  circle(FieldCutOrbX, FieldCutOrbY, 25);
  fill("blue");
  circle(OceanCutOrbX, OceanCutOrbY, 25);
  fill("white");
  circle(TundraCutOrbX, TundraCutOrbY, 25);
  fill("orange");
  circle(DesertCutOrbX, DesertCutOrbY, 25);

  LaserTime = LaserTime + 1;

  if (LaserTime >= 1000) {
    TrueLaserY = TrueLaserY - 20;
    VoidEyeX = -1000;
  }

  fill(LaserColorRed, LaserColorGreen, LaserColorBlue);
  rect(112, TrueLaserY, 176, TrueLaserHeight);
  TrueLaserHeight = TrueLaserHeight - LaserSpeed;
  fill("white");
  textSize(15);

  if (TrueLaserHeight <= -50) {
    LaserSpeed = LaserSpeed + 0.1;
    LaserColorRed = random(0, 255);
    LaserColorGreen = random(0, 255);
    LaserColorBlue = random(0, 255);

    if (TrueLaserHeight <= -400) {
      BossColor = BossColor - 0.1;
      HalfBossX1 = HalfBossX1 + 0.1;
      HalfBossX2 = HalfBossX2 - 0.1;
      HalfBossX3 = HalfBossX3 - 0.1;
      HalfBossX4 = HalfBossX4 + 0.1;
      HalfBossY1 = HalfBossY1 + 0.1;
      HalfBossY2 = HalfBossY2 + 0.1;
      HalfBossY3 = HalfBossY3 - 0.1;
      HalfBossY4 = HalfBossY4 - 0.1;
    }

    if (TrueLaserY <= -3000) {
      TrueLaserY = -3000;
    }
  }

  if (LaserTime >= 1200) {
    FieldCutOrbY = FieldCutOrbY + 1;
    if (FieldCutOrbY >= 200) {
      FieldCutOrbY = 200;
    }

    OceanCutOrbY = OceanCutOrbY + 1;
    if (OceanCutOrbY >= 200) {
      OceanCutOrbY = 200;
    }

    TundraCutOrbY = TundraCutOrbY + 1;
    if (TundraCutOrbY >= 125) {
      TundraCutOrbY = 125;
    }

    DesertCutOrbY = DesertCutOrbY + DesertCutOrbSpeed;
    if (DesertCutOrbY >= 275) {
      DesertCutOrbSpeed = 0;
    }

    if (
      FieldCutOrbY == 200 &&
      OceanCutOrbY == 200 &&
      TundraCutOrbY == 125 &&
      DesertCutOrbY == 275
    ) {
      OrbReturnPosition = 2;
      OrbReturnCount = OrbReturnCount + 0.5;
    }

    if (OrbReturnPosition >= 1 && OrbReturnCount >= 5) {
      FieldCutOrbX = FieldCutOrbX - 1;
      OceanCutOrbX = OceanCutOrbX + 1;
      TundraCutOrbY = TundraCutOrbY - 2;
      DesertCutOrbSpeed = 0.5;
      DesertCutOrbY = DesertCutOrbY + DesertCutOrbSpeed;
    }

    if (
      FieldCutOrbX <= -100 &&
      OceanCutOrbX >= 500 &&
      TundraCutOrbY <= -100 &&
      DesertCutOrbY >= 500
    ) {
      BallCutY = BallCutY + 1;
    }

    if (BallCutY >= 600) {
      screen = 7.5;
      x = 200;
      y = 25;
    }
  }
}
function AncientShrine() {
  background(ColorCircle);
  noStroke();
  fill(ShrinePath);
  rect(185, 0, 30, 300);
  fill(0);
  rect(125, 270, 150, 150);
  stroke(0);

  fill(FieldOrbHome);
  circle(155, 300, 30);
  fill(OceanOrbHome);
  circle(245, 300, 30);
  fill(TundraOrbHome);
  circle(155, 370, 30);
  fill(DesertOrbHome);
  circle(245, 370, 30);

  fill(ColorCircle);
  noStroke();
  circle(200, CardinalY, 25);

  if (OrbReturned == false) {
    CardinalY = CardinalY + 1;
  }

  if (CardinalY >= 335 && OrbReturned == false) {
    CardinalY = 335;
    OrbReturnTime = OrbReturnTime + 0.1;
  }

  if (OrbReturnTime >= 10) {
    FieldOrbHome = "lime";
  }
  if (OrbReturnTime >= 20) {
    OceanOrbHome = "blue";
  }
  if (OrbReturnTime >= 30) {
    TundraOrbHome = "white";
  }
  if (OrbReturnTime >= 40) {
    DesertOrbHome = "orange";
  }
  if (OrbReturnTime >= 50) {
    OrbReturned = true;
  }

  /*
  if (OrbReturned == true && LightPressure == false) {
    CardinalY = CardinalY - 1;
  }
  if (CardinalY <= 200 && OrbReturned == true) {
    LightPressure = true;
    CardinalY = 200; 
    if (CardinalY == 200 && LightPressure == true){
    CardinalY = CardinalY + 3;
    if(CardinalY >= 335){
      CardinalY = 335;
    }
  }
  
  }
  */

  if (OrbReturnTime >= 50) {
    ShrinePath = ColorCircle;
  }

  if (ShrinePath == ColorCircle) {
    CardinalY = CardinalY - 5;
    if (CardinalY <= 290) {
      CardinalY = 290;
    }
  }

  fill(255, 255, 255, BlindingLight);
  rect(0, 0, 400, 400);

  if (CardinalY == 290) {
    BlindingLight = BlindingLight + 3;
  }

  if (BlindingLight >= 500) {
    screen = -2;
  }
}

function FieldBossEntrance() {
  background("green");
  strokeWeight(1);
  stroke(0);
  fill(ColorCircle);
  circle(FieldEntrCutX, FieldEntrCutY, 25);
  FieldEntrCutY = FieldEntrCutY + FieldEntrCutSpeed;
  if (FieldEntrCutY >= 100 && FieldEntrApproach == false) {
    FieldEntrCutY = 100;
    FieldBossEntrX = FieldBossEntrX + 30;
  }

  strokeWeight(0);
  fill(0, 100, 0);
  circle(FieldBossEntrX, FieldBossEntrY, 100);
  fill(50, 15, 0);
  arc(
    FieldBossEntrX - 20,
    FieldBossEntrY - 10,
    40,
    40,
    0 + QUARTER_PI,
    PI + QUARTER_PI
  );
  fill(250, 15, 0);
  arc(
    FieldBossEntrX + 20,
    FieldBossEntrY - 10,
    40,
    40,
    0 - QUARTER_PI,
    PI - QUARTER_PI
  );

  if (FieldBossEntrX >= 200) {
    FieldBossEntrX = 200;
    FieldEntrTime = FieldEntrTime + 0.5;
  }
  if (FieldEntrTime >= 50) {
    FieldBossEntrY = FieldBossEntrY - FieldBossEntrSpeed;
    FieldEntrApproach = true;
    FieldEntrDarkness = FieldEntrDarkness + 3.5;
  }
  if (FieldBossEntrY - 50 <= FieldEntrCutY + 12.5) {
    FieldBossEntrSpeed = 0;
    FieldEntrCutSpeed = 0;
  }

  fill(0, 0, 0, FieldEntrDarkness);
  rect(0, 0, 400, 400);

  if (FieldEntrDarkness >= 270) {
    FieldEntrSkip = true;
    screen = 2.3;
  }
}
function FieldBossBattle() {
  background(0, 200, 0);
  fill("brown");
  rect(0, 150, 400, 10);

  if (fieldgame == true) {
    Player();
    FieldBoss();
    FieldBossBar();
    FieldPlayerBar();
    HayRollAttack();
    TractorAttack();
  }
  if (fieldgame == false && fieldfightResult == 1) {
    FieldYouWin();
  }
  if (fieldgame == false && fieldfightResult == 2) {
    FieldYouLose();
  }
  if (fieldgame == false && fieldfightResult == 3) {
    FieldYouTied();
  }

  if (x > 386.5) {
    x = 386.5;
  }

  if (x < 13.5) {
    x = 13.5;
  }
  if (y < 13.5) {
    y = 13.5;
  }

  if (y > 137.5) {
    y = 137.5;
  }
  if (fieldfightResult == 0) {
    if (mouseIsPressed) {
      if (mouseButton === LEFT) fieldshoot = true;
      FieldShotY = y + 8;
      FieldShotX = x;
    }
    if (fieldshoot == true) {
      FieldShotY = FieldShotY + 10;
      fill("black");
      circle(FieldShotX, FieldShotY, 10);
    }
  }
}
function FieldBoss() {
  strokeWeight(FieldBossStrokeWeight);
  noStroke();
  //stroke(0);
  fill(0, FieldBossGreen, 0);
  circle(FieldBossX, FieldBossY, 100);
  fill(50, 15, 0);
  arc(
    FieldBossX - 20,
    FieldBossY - 10,
    40,
    40,
    0 + QUARTER_PI,
    PI + QUARTER_PI
  );
  fill(250, 15, 0);
  arc(
    FieldBossX + 20,
    FieldBossY - 10,
    40,
    40,
    0 - QUARTER_PI,
    PI - QUARTER_PI
  );

  FieldBossX = FieldBossX + fieldspeed;

  if (FieldBossX == 200) {
    fieldspeed = fieldspeed * 1;
  }
  if (FieldBossX >= 350) {
    fieldspeed = fieldspeed * -1;
  }
  if (FieldBossX <= 50) {
    fieldspeed = fieldspeed * -1;
  }
}
function FieldBossBar() {
  strokeWeight(1);
  noStroke();
  //stroke(0);
  fill("grey");
  rect(0, 380, 400, 20);
  fill(FieldBossHealthBarColor);
  rect(0, 380, FieldBossHealth, 20);
  fill("black");
  textSize(20);
  FieldBossPercentage = round(FieldBossHealth / 4);
  //text(FieldBossPercentage + "%", 164, 397);

  if (
    FieldShotX + 5 >= FieldBossX - 50 &&
    FieldShotX - 5 <= FieldBossX + 50 &&
    FieldShotY + 5 >= FieldBossY - 50 &&
    FieldShotY - 5 <= FieldBossY + 50
  ) {
    FieldBossHealth = FieldBossHealth - FieldShotDamage;
  }

  if (FieldBossHealth > 200) {
    FieldBossHealthBarColor = "green";
  }

  if (FieldBossHealth <= 200 && FieldBossHealth > 50) {
    FieldBossHealthBarColor = "yellow";
  }
  if (FieldBossHealth <= 50) {
    FieldBossHealthBarColor = "red";
  }

  if (FieldBossHealth <= 0) {
    fieldfightResult = 1;
    FieldBossHealth = 0;
    fieldgame = false;
  }

  if (FieldBossHealth <= 0 && FieldPlayerHealth <= 0) {
    fieldfightResult = 3;
    FieldBossHealth = 0;
    FieldPlayerHealth = 0;
  }
}
function FieldPlayerBar() {
  fill("grey");
  rect(100, 0, 200, 20);
  fill(FieldPlayerHealthBarColor);
  rect(100, 0, FieldPlayerHealth, 20);
  fill("black");
  FieldPlayerPercentage = round(FieldPlayerHealth / 2);
  //text(FieldPlayerHealth/2 + "%", 164, 17);

  if (FieldPlayerHealth > 100) {
    FieldPlayerHealthBarColor = "green";
  }

  if (FieldPlayerHealth <= 100 && FieldPlayerHealth > 25) {
    FieldPlayerHealthBarColor = "yellow";
  }
  if (FieldPlayerHealth <= 25) {
    FieldPlayerHealthBarColor = "red";
  }
  if (FieldPlayerHealth <= 0) {
    FieldPlayerHealth = 0;
    fieldgame = false;
    fieldfightResult = 2;
    x = 200;
    y = 200;
  }
}
function HayRollAttack() {
  fill(50, 15, 0);
  circle(HayAttackX1, HayAttackY1, HaySize);
  circle(HayAttackX2, HayAttackY2, HaySize);
  circle(HayAttackX3, HayAttackY3, HaySize);
  circle(HayAttackX4, HayAttackY4, HaySize);
  //movement
  HayAttackX1 = HayAttackX1 + HaySpeed;
  HayAttackX2 = HayAttackX2 - HaySpeed;
  HayAttackX3 = HayAttackX3 + HaySpeed;
  HayAttackX4 = HayAttackX4 - HaySpeed;
  //contact
  //18.75
  if (
    x + 12.5 >= HayAttackX1 - 18.75 &&
    x - 12.5 <= HayAttackX1 + 18.75 &&
    y + 12.5 >= HayAttackY1 - 18.75 &&
    y - 12.5 <= HayAttackY1 + 18.75
  ) {
    FieldPlayerHealth = FieldPlayerHealth - HayDamage;
  }
  if (
    x + 12.5 >= HayAttackX2 - 18.75 &&
    x - 12.5 <= HayAttackX2 + 18.75 &&
    y + 12.5 >= HayAttackY2 - 18.75 &&
    y - 12.5 <= HayAttackY2 + 18.75
  ) {
    FieldPlayerHealth = FieldPlayerHealth - HayDamage;
  }
  if (
    x + 12.5 >= HayAttackX3 - 18.75 &&
    x - 12.5 <= HayAttackX3 + 18.75 &&
    y + 12.5 >= HayAttackY3 - 18.75 &&
    y - 12.5 <= HayAttackY3 + 18.75
  ) {
    FieldPlayerHealth = FieldPlayerHealth - HayDamage;
  }
  if (
    x + 12.5 >= HayAttackX4 - 18.75 &&
    x - 12.5 <= HayAttackX4 + 18.75 &&
    y + 12.5 >= HayAttackY4 - 18.75 &&
    y - 12.5 <= HayAttackY4 + 18.75
  ) {
    FieldPlayerHealth = FieldPlayerHealth - HayDamage;
  }
  //return
  if (HayAttackX1 >= 700) {
    HayAttackX1 = -800;
  }
  if (HayAttackX2 <= -300) {
    HayAttackX2 = 1200;
  }
  if (HayAttackX3 >= 700) {
    HayAttackX3 = -800;
  }
  if (HayAttackX4 <= -300) {
    HayAttackX4 = 1200;
  }
}
function TractorAttack() {
  fill(250, 15, 0);
  rect(TractorAttackX1, TractorAttackY1, 200, 10);
  rect(TractorAttackX2, TractorAttackY2, 200, 10);
  rect(TractorAttackX3, TractorAttackY3, 200, 10);
  rect(TractorAttackX4, TractorAttackY4, 200, 10);
  rect(TractorAttackX5, TractorAttackY5, 200, 10);
  rect(TractorAttackX6, TractorAttackY6, 200, 10);
  //Movement
  TractorAttackY1 = TractorAttackY1 - TractorSpeed;
  TractorAttackY2 = TractorAttackY2 - TractorSpeed;
  TractorAttackY3 = TractorAttackY3 - TractorSpeed;
  TractorAttackY4 = TractorAttackY4 - TractorSpeed;
  TractorAttackY5 = TractorAttackY5 - TractorSpeed;
  TractorAttackY6 = TractorAttackY6 - TractorSpeed;

  if (
    TractorAttackX1 + 200 >= x - 12.5 &&
    TractorAttackX1 <= x + 12.5 &&
    ((TractorAttackY1 <= y + 12.5 && TractorAttackY1 + 10 >= y - 12.5) ||
      (y + 12.5 <= TractorAttackY1 + 10 && y + 12.5 >= TractorAttackY1))
  ) {
    FieldPlayerHealth = FieldPlayerHealth - TractorDamage;
  }

  if (
    TractorAttackX2 + 200 >= x - 12.5 &&
    TractorAttackX2 <= x + 12.5 &&
    ((TractorAttackY2 <= y + 12.5 && TractorAttackY2 + 10 >= y - 12.5) ||
      (y + 12.5 <= TractorAttackY2 + 10 && y + 12.5 >= TractorAttackY2))
  ) {
    FieldPlayerHealth = FieldPlayerHealth - TractorDamage;
  }

  if (
    TractorAttackX3 + 200 >= x - 12.5 &&
    TractorAttackX3 <= x + 12.5 &&
    ((TractorAttackY3 <= y + 12.5 && TractorAttackY3 + 10 >= y - 12.5) ||
      (y + 12.5 <= TractorAttackY3 + 10 && y + 12.5 >= TractorAttackY3))
  ) {
    FieldPlayerHealth = FieldPlayerHealth - TractorDamage;
  }
  if (
    TractorAttackX4 + 200 >= x - 12.5 &&
    TractorAttackX4 <= x + 12.5 &&
    ((TractorAttackY4 <= y + 12.5 && TractorAttackY4 + 10 >= y - 12.5) ||
      (y + 12.5 <= TractorAttackY4 + 10 && y + 12.5 >= TractorAttackY4))
  ) {
    FieldPlayerHealth = FieldPlayerHealth - TractorDamage;
  }
  if (
    TractorAttackX5 + 200 >= x - 12.5 &&
    TractorAttackX5 <= x + 12.5 &&
    ((TractorAttackY5 <= y + 12.5 && TractorAttackY5 + 10 >= y - 12.5) ||
      (y + 12.5 <= TractorAttackY5 + 10 && y + 12.5 >= TractorAttackY5))
  ) {
    FieldPlayerHealth = FieldPlayerHealth - TractorDamage;
  }
  if (
    TractorAttackX6 + 200 >= x - 12.5 &&
    TractorAttackX6 <= x + 12.5 &&
    ((TractorAttackY6 <= y + 12.5 && TractorAttackY6 + 10 >= y - 12.5) ||
      (y + 12.5 <= TractorAttackY6 + 10 && y + 12.5 >= TractorAttackY6))
  ) {
    FieldPlayerHealth = FieldPlayerHealth - TractorDamage;
  }
  /*
TractorAttackY1 = 2200;
TractorAttackY2 = 2300;
TractorAttackY3 = 2400;
TractorAttackY4 = 2500;
TractorAttackY5 = 2600;
TractorAttackY6 = 2700;
*/
  if (TractorAttackY1 <= -2500) {
    TractorAttackY1 = 2200;
  }
  if (TractorAttackY2 <= -2400) {
    TractorAttackY2 = 2300;
  }
  if (TractorAttackY3 <= -2300) {
    TractorAttackY3 = 2400;
  }
  if (TractorAttackY4 <= -2200) {
    TractorAttackY4 = 2500;
  }
  if (TractorAttackY5 <= -2100) {
    TractorAttackY5 = 2600;
  }
  if (TractorAttackY6 <= -2000) {
    TractorAttackY6 = 2700;
  }
}
function FieldYouWin() {
  fieldshoot = false;
  x = 300;
  y = 50;
  background(FieldCutSceneBackground);
  FieldCutSceneBackground = FieldCutSceneBackground - 5;
  fill(0, FieldCutBossGreen, 0);
  noStroke();
  arc(FieldQuadBossX1, FieldQuadBossY1, 100, 100, 0, HALF_PI);
  arc(FieldQuadBossX2, FieldQuadBossY2, 100, 100, HALF_PI, PI);
  arc(FieldQuadBossX3, FieldQuadBossY3, 100, 100, PI, PI + HALF_PI);
  arc(FieldQuadBossX4, FieldQuadBossY4, 100, 100, PI + HALF_PI, 0);
  fill(50, 15, 0);
  arc(CutFieldLeftEyeX, 290, 40, 40, 0 + QUARTER_PI, PI + QUARTER_PI);
  fill(250, 15, 0);
  arc(CutFieldRightEyeX, 290, 40, 40, 0 - QUARTER_PI, PI - QUARTER_PI);

  Laser = ColorCircle;
  noStroke();
  //stroke(10);
  fill(ColorCircle);
  circle(FieldCutx, FieldCuty, 25);
  fill(Laser);
  rect(125, FieldLaserY, 150, FieldLaserHeight);

  if (FieldCutSceneBackground <= -400) {
    FieldLaserHeight = FieldLaserHeight + 30;

    fieldtime = fieldtime + 1;

    if (fieldtime >= 150) {
      FieldLaserY = FieldLaserY + 10;
      CutFieldLeftEyeX = -200;
      CutFieldRightEyeX = 600;
    }

    if (FieldLaserY >= 1200) {
      FieldCuty = FieldCuty - 1;
    }

    if (FieldCuty <= -50) {
      FieldQuadBossX1 = FieldQuadBossX1 + 0.1;
      FieldQuadBossX2 = FieldQuadBossX2 - 0.1;
      FieldQuadBossX3 = FieldQuadBossX3 - 0.1;
      FieldQuadBossX4 = FieldQuadBossX4 + 0.1;

      FieldQuadBossY1 = FieldQuadBossY1 + 0.1;
      FieldQuadBossY2 = FieldQuadBossY2 + 0.1;
      FieldQuadBossY3 = FieldQuadBossY3 - 0.1;
      FieldQuadBossY4 = FieldQuadBossY4 - 0.1;

      FieldCutBossGreen = FieldCutBossGreen - 1;
    }

    if (FieldCutBossGreen <= -50) {
      FieldBossDie = true;
    }
    if (FieldBossDie == true) {
      screen = 2.6;
      x = 200;
      x = 50;
    }
  }
}
function FieldYouLose() {
  background(0, FieldCutSceneBackground, 0);
  x = 200;
  y = 200;
  fieldshoot = false;
  FieldCutSceneBackground = FieldCutSceneBackground - 5;
  fill(ColorCircle);
  noStroke();
  arc(FieldQuadX1, FieldQuadY1, 25, 25, 0, HALF_PI);
  arc(FieldQuadX2, FieldQuadY2, 25, 25, HALF_PI, PI);
  arc(FieldQuadX3, FieldQuadY3, 25, 25, PI, PI + HALF_PI);
  arc(FieldQuadX4, FieldQuadY4, 25, 25, PI + HALF_PI, 0);

  noStroke();
  //stroke(10);
  fill(0, FieldCutCutBossGreen, 0);
  circle(FieldCutBossX, FieldCutBossY, 100);
  fill(50, 15, 0);
  arc(
    FieldCutBossX - 20,
    FieldCutBossY - 10,
    40,
    40,
    0 + QUARTER_PI,
    PI + QUARTER_PI
  );
  fill(250, 15, 0);
  arc(
    FieldCutBossX + 20,
    FieldCutBossY - 10,
    40,
    40,
    0 - QUARTER_PI,
    PI - QUARTER_PI
  );

  fill(0, FieldCutCutBoss2Green, 0);
  circle(FieldCutBossX2, FieldCutBossY2, 100);
  fill(50, 15, 0);
  arc(
    FieldCutBossX2 - 20,
    FieldCutBossY2 - 10,
    40,
    40,
    0 + QUARTER_PI,
    PI + QUARTER_PI
  );
  fill(250, 15, 0);
  arc(
    FieldCutBossX2 + 20,
    FieldCutBossY2 - 10,
    40,
    40,
    0 - QUARTER_PI,
    PI - QUARTER_PI
  );

  if (FieldCutSceneBackground <= -400) {
    fieldtime = fieldtime + 0.1;

    FieldCutBossY = FieldCutBossY - FieldCutspeed;
    FieldCutBossX2 = FieldCutBossX2 + FieldCutspeed2;
    FieldCutspeed = FieldCutspeed + 10;
    FieldCutspeed2 = FieldCutspeed2 + 10;

    FieldCutCutBoss2Green = FieldCutCutBoss2Green - 1;
    FieldCutCutBossGreen = FieldCutCutBossGreen - 1;

    if (FieldCutBossY == 300) {
      FieldCutspeed = FieldCutspeed * 1;
    }

    if (FieldCutBossY < 100) {
      FieldCutspeed = FieldCutspeed * -1;
    }

    if (FieldCutBossY > 300) {
      FieldCutspeed = FieldCutspeed * -1;
    }

    if (FieldCutBossX2 == -100) {
      FieldCutspeed2 = FieldCutspeed2 * 1;
    }

    if (FieldCutBossX2 >= 500) {
      FieldCutspeed2 = FieldCutspeed2 * -1;
    }

    if (FieldCutBossX2 <= -100) {
      FieldCutspeed2 = FieldCutspeed2 * -1;
    }

    if (fieldtime >= 35) {
      FieldPlayerRed = FieldPlayerRed - 10;

      FieldQuadX1 = FieldQuadX1 + 0.1;
      FieldQuadX2 = FieldQuadX2 - 0.1;
      FieldQuadX3 = FieldQuadX3 - 0.1;
      FieldQuadX4 = FieldQuadX4 + 0.1;

      FieldQuadY1 = FieldQuadY1 + 0.1;
      FieldQuadY2 = FieldQuadY2 + 0.1;
      FieldQuadY3 = FieldQuadY3 - 0.1;
      FieldQuadY4 = FieldQuadY4 - 0.1;
    }

    if (FieldPlayerRed <= -150) {
      FieldPlayerDie = true;
      x = MysteryOrbX;
      y = MysteryOrbY;
    }

    if (FieldPlayerDie == true) {
      FieldPlayerDie = false;
      x = MysteryOrbX;
      y = MysteryOrbY;
      x = 200;
      y = 200;
      screen = 1;
      if (screen == 1) {
        x = 200;
        y = 200;
      }
      x = 200;
      y = 200;
      HayAttackX1 = -300;
      HayAttackX2 = 700;
      HayAttackX3 = -300;
      HayAttackX4 = 700;
      TractorAttackY1 = 2200;
      TractorAttackY2 = 2300;
      TractorAttackY3 = 2400;
      TractorAttackY4 = 2500;
      TractorAttackY5 = 2600;
      TractorAttackY6 = 2700;
      fieldfightResult = 0;
      fieldgame = true;
      FieldPlayerHealth = 200;
      FieldBossHealth = 400;

      FieldCutBossX = 200;
      FieldCutBossY = 300;
      FieldCutBossX2 = -100;
      FieldCutBossY2 = 200;
      FieldBossY2 = 200;
      FieldCutCutBossGreen = 100;
      FieldCutCutBoss2Green = 100;
      FieldQuadX1 = 200;
      FieldQuadY1 = 200;
      FieldQuadX2 = 200;
      FieldQuadY2 = 200;
      FieldQuadX3 = 200;
      FieldQuadY3 = 200;
      FieldQuadX4 = 200;
      FieldQuadY4 = 200;
      FieldPlayerRed = 255;
      fieldtime = 0;
      FieldCutspeed = 20;
      FieldCutspeed2 = 20;
      FieldCutSceneBackground = 200;
    }
  }
}
function FieldYouTied() {
  background("yellow");
  textSize(80);
  text("You...Tied?", 1, 150);
  fill("black");
  circle(150, 200, 50);
  circle(250, 200, 50);
  rect(100, 250, 200, 20);
}
function FieldOrbLocation() {
  background(0, 200, 0);
  fill(0, 175, 0);
  rect(185, 0, 30, 400);

  x = 200;

  if (y + 12.5 >= 400) {
    y = 387.5;
  }
  if (y - 12.5 <= 0 && item1 == false) {
    y = 12.5;
  }
  if (y - 12.5 <= 0 && item1 == true) {
    screen = 1;
    y = 350;
  }
}

function OceanBossEntrance() {
  background(0, 0, 50);
  strokeWeight(1);
  stroke(0);
  fill(ColorCircle);
  circle(OceanEntrCutX, OceanEntrCutY, 25);

  strokeWeight(0);
  OceanEntrCutY = OceanEntrCutY - OceanEntrCutSpeed;

  if (OceanEntrCutY <= 300 && OceanEntrApproach == false) {
    OceanEntrCutSpeed = 0;
    WaveEntrX = WaveEntrX + 5;
  }

  fill(0, 0, 200);
  circle(OceanBossEntrX, OceanBossEntrY, 100);
  fill("yellow");
  arc(
    OceanBossEntrX - 20,
    OceanBossEntrY - 10,
    40,
    40,
    0 + QUARTER_PI,
    PI + QUARTER_PI
  );
  fill("cyan");
  arc(
    OceanBossEntrX + 20,
    OceanBossEntrY - 10,
    40,
    40,
    0 - QUARTER_PI,
    PI - QUARTER_PI
  );

  OceanBossEntrY = OceanBossEntrY + OceanBossEntrSpeed;

  fill(0, 0, 20);
  rect(WaveEntrX, WaveEntrY, 1000, 200);

  if (WaveEntrX >= -600 && WaveEntrX <= 500) {
    OceanBossEntrY = 100;
  }

  if (WaveEntrX >= 600) {
    OceanBossEntrSpeed = 1;
    OceanEntrCutSpeed = 1;
    OceanEntrApproach = true;
    OceanEntrDarkness = OceanEntrDarkness + 3.5;
  }

  if (OceanBossEntrY + 50 >= OceanEntrCutY - 12.5) {
    OceanBossEntrSpeed = 0;
    OceanEntrCutSpeed = 0;
    OceanEntrSkip = true;
  }

  if (OceanEntrDarkness >= 270) {
    screen = 3.3;
  }

  fill(0, 0, 0, OceanEntrDarkness);
  rect(0, 0, 400, 400);
}
function OceanBossBattle() {
  background(0, 0, 50);
  fill("black");
  rect(0, 250, 400, 10);

  if (oceangame == true) {
    Player();
    OceanBoss();
    OceanBossBar();
    OceanPlayerBar();
    SharkAttack();
    YellowLightningAttack();
    CyanLightningAttack();
  }
  if (oceangame == false && oceanfightResult == 1) {
    OceanYouWin();
  }
  if (oceangame == false && oceanfightResult == 2) {
    OceanYouLose();
  }
  if (oceangame == false && oceanfightResult == 3) {
    OceanYouTie();
  }
  if (oceanfightResult == 0) {
    if (mouseIsPressed) {
      if (mouseButton === LEFT) oceanshoot = true;
      OceanShotY = y - 8;
      OceanShotX = x;
    }
    if (oceanshoot == true) {
      OceanShotY = OceanShotY - 10;
      fill("black");
      circle(OceanShotX, OceanShotY, 10);
    }
  }
  if (x > 386.5) {
    x = 386.5;
  }

  if (x < 13.5) {
    x = 13.5;
  }
  if (y < 272.5) {
    y = 272.5;
  }
  if (y > 387.5) {
    y = 387.5;
  }
}
function OceanBoss() {
  fill(0, 0, 200);
  circle(OceanBossX, OceanBossY, 100);
  fill("yellow");
  arc(
    OceanBossX - 20,
    OceanBossY - 10,
    40,
    40,
    0 + QUARTER_PI,
    PI + QUARTER_PI
  );
  fill("cyan");
  arc(
    OceanBossX + 20,
    OceanBossY - 10,
    40,
    40,
    0 - QUARTER_PI,
    PI - QUARTER_PI
  );

  OceanBossX = OceanBossX + oceanspeed;

  if (OceanBossX == 200) {
    oceanspeed = oceanspeed * 1;
  }
  if (OceanBossX >= 350) {
    oceanspeed = oceanspeed * -1;
  }
  if (OceanBossX <= 50) {
    oceanspeed = oceanspeed * -1;
  }
}
function OceanBossBar() {
  strokeWeight(1);
  noStroke();
  //stroke(0);
  fill("grey");
  rect(0, 0, 400, 20);
  fill(OceanBossHealthBarColor);
  rect(0, 0, OceanBossHealth, 20);
  fill("black");
  textSize(20);
  OceanBossPercentage = round(OceanBossHealth / 4);
  //text(OceanBossPercentage + "%", 170, 17);

  if (
    OceanShotX + 5 >= OceanBossX - 50 &&
    OceanShotX - 5 <= OceanBossX + 50 &&
    OceanShotY + 5 >= OceanBossY - 50 &&
    OceanShotY - 5 <= OceanBossY + 50
  ) {
    OceanBossHealth = OceanBossHealth - OceanShotDamage;
  }

  if (OceanBossHealth > 200) {
    OceanBossHealthBarColor = "green";
  }
  if (OceanBossHealth <= 200 && OceanBossHealth > 50) {
    OceanBossHealthBarColor = "yellow";
  }
  if (OceanBossHealth <= 50) {
    OceanBossHealthBarColor = "red";
  }
  if (OceanBossHealth <= 0) {
    OceanBossHealth = 0;
  }
  if (OceanBossHealth <= 0) {
    oceanfightResult = 1;
    OceanBossHealth = 0;
    oceangame = false;
  }
  if (OceanBossHealth <= 0 && OceanPlayerHealth <= 0) {
    oceangame = false;
    oceanfightResult = 3;
    OceanBossHealth = 0;
    OceanPlayerHealth = 0;
  }
}
function OceanPlayerBar() {
  fill("grey");
  rect(100, 380, 200, 20);
  fill(OceanPlayerHealthBarColor);
  rect(100, 380, OceanPlayerHealth, 20);
  fill("black");
  OceanPlayerPercentage = round(OceanPlayerHealth / 2);
  //text(OceanPlayerPercentage + "%", 174, 397);

  if (OceanPlayerHealth > 100) {
    OceanPlayerHealthBarColor = "green";
  }

  if (OceanPlayerHealth <= 100 && OceanPlayerHealth > 25) {
    OceanPlayerHealthBarColor = "yellow";
  }
  if (OceanPlayerHealth <= 25) {
    OceanPlayerHealthBarColor = "red";
  }
  if (OceanPlayerHealth <= 0) {
    OceanPlayerHealth = 0;
  }
  if (OceanPlayerHealth <= 0) {
    OceanPlayerHealth = 0;
    oceangame = false;
    oceanfightResult = 2;
  }
}
function SharkAttack() {
  fill(100);
  // width, height
  ellipse(SharkAttackX1, SharkAttackY1, 100, 30);
  ellipse(SharkAttackX2, SharkAttackY2, 100, 30);
  ellipse(SharkAttackX3, SharkAttackY3, 100, 30);
  ellipse(SharkAttackX4, SharkAttackY4, 100, 30);

  //Movement
  SharkAttackX1 = SharkAttackX1 - Shark1Speed;
  SharkAttackX2 = SharkAttackX2 + Shark2Speed;
  SharkAttackX3 = SharkAttackX3 - Shark3Speed;
  SharkAttackX4 = SharkAttackX4 + Shark4Speed;

  //Contact
  if (
    x + 12.5 >= SharkAttackX1 - 50 &&
    x - 12.5 <= SharkAttackX1 + 50 &&
    y + 12.5 >= SharkAttackY1 - 15 &&
    y - 12.5 <= SharkAttackY1 + 15
  ) {
    OceanPlayerHealth = OceanPlayerHealth - SharkDamage;
  }
  if (
    x + 12.5 >= SharkAttackX2 - 50 &&
    x - 12.5 <= SharkAttackX2 + 50 &&
    y + 12.5 >= SharkAttackY2 - 15 &&
    y - 12.5 <= SharkAttackY2 + 15
  ) {
    OceanPlayerHealth = OceanPlayerHealth - SharkDamage;
  }
  if (
    x + 12.5 >= SharkAttackX3 - 50 &&
    x - 12.5 <= SharkAttackX3 + 50 &&
    y + 12.5 >= SharkAttackY3 - 15 &&
    y - 12.5 <= SharkAttackY3 + 15
  ) {
    OceanPlayerHealth = OceanPlayerHealth - SharkDamage;
  }
  if (
    x + 12.5 >= SharkAttackX4 - 50 &&
    x - 12.5 <= SharkAttackX4 + 50 &&
    y + 12.5 >= SharkAttackY4 - 15 &&
    y - 12.5 <= SharkAttackY4 + 15
  ) {
    OceanPlayerHealth = OceanPlayerHealth - SharkDamage;
  }
  //Return
  if (SharkAttackX1 <= -2000) {
    SharkAttackX1 = 800;
    Shark1Speed = random(3, 6);
  }
  if (SharkAttackX2 >= 2200) {
    SharkAttackX2 = -400;
    Shark2Speed = random(3, 6);
  }
  if (SharkAttackX3 <= -2000) {
    SharkAttackX3 = 800;
    Shark3Speed = random(3, 6);
  }
  if (SharkAttackX4 >= 2200) {
    SharkAttackX4 = -400;
    Shark4Speed = random(3, 6);
  }
}
function YellowLightningAttack() {
  fill("yellow");
  rect(YellowLightningX1, YellowLightningY1, 20, 400);
  rect(YellowLightningX2, YellowLightningY2, 20, 400);
  rect(YellowLightningX3, YellowLightningY3, 20, 400);
  rect(YellowLightningX4, YellowLightningY4, 20, 400);
  rect(YellowLightningX5, YellowLightningY5, 20, 400);

  YellowLightningY1 = YellowLightningY1 + YellowLightningSpeed;
  YellowLightningY2 = YellowLightningY2 + YellowLightningSpeed;
  YellowLightningY3 = YellowLightningY3 + YellowLightningSpeed;
  YellowLightningY4 = YellowLightningY4 + YellowLightningSpeed;
  YellowLightningY5 = YellowLightningY5 + YellowLightningSpeed;

  if (YellowLightningY1 >= -3000 && YellowLightningY1 <= -500) {
    fill("red");
    quad(
      YellowWarningX1 + 15,
      YellowWarningY1 + 0,
      YellowWarningX1 + 35,
      YellowWarningY1 + 0,
      YellowWarningX1 + 35,
      YellowWarningY1 + 60,
      YellowWarningX1 + 15,
      YellowWarningY1 + 60
    );
    square(YellowWarningX1 + 15, YellowWarningY1 + 65, 20);

    quad(
      YellowWarningX2 + 15,
      YellowWarningY2 + 0,
      YellowWarningX2 + 35,
      YellowWarningY2 + 0,
      YellowWarningX2 + 35,
      YellowWarningY2 + 60,
      YellowWarningX2 + 15,
      YellowWarningY2 + 60
    );
    square(YellowWarningX2 + 15, YellowWarningY2 + 65, 20);

    quad(
      YellowWarningX3 + 15,
      YellowWarningY3 + 0,
      YellowWarningX3 + 35,
      YellowWarningY3 + 0,
      YellowWarningX3 + 35,
      YellowWarningY3 + 60,
      YellowWarningX3 + 15,
      YellowWarningY3 + 60
    );
    square(YellowWarningX3 + 15, YellowWarningY3 + 65, 20);

    quad(
      YellowWarningX4 + 15,
      YellowWarningY4 + 0,
      YellowWarningX4 + 35,
      YellowWarningY4 + 0,
      YellowWarningX4 + 35,
      YellowWarningY4 + 60,
      YellowWarningX4 + 15,
      YellowWarningY4 + 60
    );
    square(YellowWarningX4 + 15, YellowWarningY4 + 65, 20);

    quad(
      YellowWarningX5 + 15,
      YellowWarningY5 + 0,
      YellowWarningX5 + 35,
      YellowWarningY5 + 0,
      YellowWarningX5 + 35,
      YellowWarningY5 + 60,
      YellowWarningX5 + 15,
      YellowWarningY5 + 60
    );
    square(YellowWarningX5 + 15, YellowWarningY5 + 65, 20);
  }

  if (YellowLightningY1 >= 34000) {
    YellowLightningY1 = -30000;
  }
  if (YellowLightningY2 >= 34000) {
    YellowLightningY2 = -30000;
  }
  if (YellowLightningY3 >= 34000) {
    YellowLightningY3 = -30000;
  }
  if (YellowLightningY4 >= 34000) {
    YellowLightningY4 = -30000;
  }
  if (YellowLightningY5 >= 34000) {
    YellowLightningY5 = -30000;
  }

  if (
    YellowLightningX1 + 20 >= x - 12.5 &&
    YellowLightningX1 <= x + 12.5 &&
    ((YellowLightningY1 <= y + 12.5 && YellowLightningY1 + 400 >= y - 12.5) ||
      (y + 12.5 <= YellowLightningY1 + 400 && y + 12.5 >= YellowLightningY1))
  ) {
    OceanPlayerHealth = OceanPlayerHealth - YellowLightningDamage;
  }
  if (
    YellowLightningX2 + 20 >= x - 12.5 &&
    YellowLightningX2 <= x + 12.5 &&
    ((YellowLightningY2 <= y + 12.5 && YellowLightningY2 + 400 >= y - 12.5) ||
      (y + 12.5 <= YellowLightningY2 + 400 && y + 12.5 >= YellowLightningY2))
  ) {
    OceanPlayerHealth = OceanPlayerHealth - YellowLightningDamage;
  }
  if (
    YellowLightningX3 + 20 >= x - 12.5 &&
    YellowLightningX3 <= x + 12.5 &&
    ((YellowLightningY3 <= y + 12.5 && YellowLightningY3 + 400 >= y - 12.5) ||
      (y + 12.5 <= YellowLightningY3 + 400 && y + 12.5 >= YellowLightningY3))
  ) {
    OceanPlayerHealth = OceanPlayerHealth - YellowLightningDamage;
  }
  if (
    YellowLightningX4 + 20 >= x - 12.5 &&
    YellowLightningX4 <= x + 12.5 &&
    ((YellowLightningY4 <= y + 12.5 && YellowLightningY4 + 400 >= y - 12.5) ||
      (y + 12.5 <= YellowLightningY4 + 400 && y + 12.5 >= YellowLightningY4))
  ) {
    OceanPlayerHealth = OceanPlayerHealth - YellowLightningDamage;
  }
  if (
    YellowLightningX5 + 20 >= x - 12.5 &&
    YellowLightningX5 <= x + 12.5 &&
    ((YellowLightningY5 <= y + 12.5 && YellowLightningY5 + 400 >= y - 12.5) ||
      (y + 12.5 <= YellowLightningY5 + 400 && y + 12.5 >= YellowLightningY5))
  ) {
    OceanPlayerHealth = OceanPlayerHealth - YellowLightningDamage;
  }
}
function CyanLightningAttack() {
  fill("cyan");
  rect(CyanLightningX1, CyanLightningY1, 20, 400);
  rect(CyanLightningX2, CyanLightningY2, 20, 400);
  rect(CyanLightningX3, CyanLightningY3, 20, 400);
  rect(CyanLightningX4, CyanLightningY4, 20, 400);

  CyanLightningY1 = CyanLightningY1 + CyanLightningSpeed;
  CyanLightningY2 = CyanLightningY2 + CyanLightningSpeed;
  CyanLightningY3 = CyanLightningY3 + CyanLightningSpeed;
  CyanLightningY4 = CyanLightningY4 + CyanLightningSpeed;

  if (CyanLightningY1 >= -2500 && CyanLightningY1 <= -500) {
    fill("red");
    quad(
      CyanWarningX1 + 0,
      CyanWarningY1 + 0,
      CyanWarningX1 + 20,
      CyanWarningY1 + 0,
      CyanWarningX1 + 20,
      CyanWarningY1 + 60,
      CyanWarningX1 + 0,
      CyanWarningY1 + 60
    );
    square(CyanWarningX1, CyanWarningY1 + 65, 20);

    quad(
      CyanWarningX2 + 0,
      CyanWarningY2 + 0,
      CyanWarningX2 + 20,
      CyanWarningY2 + 0,
      CyanWarningX2 + 20,
      CyanWarningY2 + 60,
      CyanWarningX2 + 0,
      CyanWarningY2 + 60
    );
    square(CyanWarningX2, CyanWarningY2 + 65, 20);

    quad(
      CyanWarningX3 + 0,
      CyanWarningY3 + 0,
      CyanWarningX3 + 20,
      CyanWarningY3 + 0,
      CyanWarningX3 + 20,
      CyanWarningY3 + 60,
      CyanWarningX3 + 0,
      CyanWarningY3 + 60
    );
    square(CyanWarningX3, CyanWarningY3 + 65, 20);

    quad(
      CyanWarningX4 + 0,
      CyanWarningY4 + 0,
      CyanWarningX4 + 20,
      CyanWarningY4 + 0,
      CyanWarningX4 + 20,
      CyanWarningY4 + 60,
      CyanWarningX4 + 0,
      CyanWarningY4 + 60
    );
    square(CyanWarningX4, CyanWarningY4 + 65, 20);
  }
  if (CyanLightningY1 >= 39000) {
    CyanLightningY1 = -35000;
  }
  if (CyanLightningY2 >= 39000) {
    CyanLightningY2 = -35000;
  }
  if (CyanLightningY3 >= 39000) {
    CyanLightningY3 = -35000;
  }
  if (CyanLightningY4 >= 39000) {
    CyanLightningY4 = -35000;
  }

  if (
    CyanLightningX1 + 20 >= x - 12.5 &&
    CyanLightningX1 <= x + 12.5 &&
    ((CyanLightningY1 <= y + 12.5 && CyanLightningY1 + 400 >= y - 12.5) ||
      (y + 12.5 <= CyanLightningY1 + 400 && y + 12.5 >= CyanLightningY1))
  ) {
    OceanPlayerHealth = OceanPlayerHealth - CyanLightningDamage;
  }
  if (
    CyanLightningX2 + 20 >= x - 12.5 &&
    CyanLightningX2 <= x + 12.5 &&
    ((CyanLightningY2 <= y + 12.5 && CyanLightningY2 + 400 >= y - 12.5) ||
      (y + 12.5 <= CyanLightningY2 + 400 && y + 12.5 >= CyanLightningY2))
  ) {
    OceanPlayerHealth = OceanPlayerHealth - CyanLightningDamage;
  }
  if (
    CyanLightningX3 + 20 >= x - 12.5 &&
    CyanLightningX3 <= x + 12.5 &&
    ((CyanLightningY3 <= y + 12.5 && CyanLightningY3 + 400 >= y - 12.5) ||
      (y + 12.5 <= CyanLightningY3 + 400 && y + 12.5 >= CyanLightningY3))
  ) {
    OceanPlayerHealth = OceanPlayerHealth - CyanLightningDamage;
  }
  if (
    CyanLightningX4 + 20 >= x - 12.5 &&
    CyanLightningX4 <= x + 12.5 &&
    ((CyanLightningY4 <= y + 12.5 && CyanLightningY4 + 400 >= y - 12.5) ||
      (y + 12.5 <= CyanLightningY4 + 400 && y + 12.5 >= CyanLightningY4))
  ) {
    OceanPlayerHealth = OceanPlayerHealth - CyanLightningDamage;
  }
}
function OceanYouWin() {
  background(0, 0, OceanBackgroundBlue);
  oceanshoot = false;
  Laser = ColorCircle;
  OceanBackgroundBlue = OceanBackgroundBlue - 1;
  //Player
  fill(ColorCircle);
  circle(OceanCutx, OceanCuty, 25);
  //Boss
  fill(0, 0, OceanBossBlue);
  arc(OceanQuadBossX1, OceanQuadBossY1, 100, 100, 0, HALF_PI);
  arc(OceanQuadBossX2, OceanQuadBossY2, 100, 100, HALF_PI, PI);
  arc(OceanQuadBossX3, OceanQuadBossY3, 100, 100, PI, PI + HALF_PI);
  arc(OceanQuadBossX4, OceanQuadBossY4, 100, 100, PI + HALF_PI, 0);
  fill("yellow");
  arc(CutOceanLeftEyeX, 90, 40, 40, 0 + QUARTER_PI, PI + QUARTER_PI);
  fill("cyan");
  arc(CutOceanRightEyeX, 90, 40, 40, 0 - QUARTER_PI, PI - QUARTER_PI);
  //Laser
  fill(Laser);
  rect(125, OceanLaserY, 150, OceanLaserHeight);
  if (OceanBackgroundBlue <= -50) {
    OceanLaserHeight = OceanLaserHeight - 30;
  }

  oceantime = oceantime + 1;

  if (oceantime >= 250) {
    OceanLaserY = OceanLaserY - 30;
    CutOceanLeftEyeX = -300;
    CutOceanRightEyeX = 700;
  }

  if (OceanLaserY <= -1000) {
    OceanCuty = OceanCuty + 1;
  }

  if (OceanCuty >= 500) {
    OceanQuadBossX1 = OceanQuadBossX1 + 0.1;
    OceanQuadBossX2 = OceanQuadBossX2 - 0.1;
    OceanQuadBossX3 = OceanQuadBossX3 - 0.1;
    OceanQuadBossX4 = OceanQuadBossX4 + 0.1;

    OceanQuadBossY1 = OceanQuadBossY1 + 0.1;
    OceanQuadBossY2 = OceanQuadBossY2 + 0.1;
    OceanQuadBossY3 = OceanQuadBossY3 - 0.1;
    OceanQuadBossY4 = OceanQuadBossY4 - 0.1;

    OceanBossBlue = OceanBossBlue - 5;
  }

  if (OceanBossBlue <= -150) {
    OceanBossDie = true;
  }
  if (OceanBossDie == true) {
    OceanBossDie = false;
    screen = 3.6;
    x = 200;
    y = 350;
  }
}
function OceanYouLose() {
  background(0, 0, OceanCutBackBlue);
  oceanshoot = false;
  OceanCutBackBlue = OceanCutBackBlue - 0.5;

  fill(0, 0, OceanBossBlue);
  circle(OceanCutBossX, OceanCutBossY, 100);
  fill("yellow");
  arc(
    OceanCutBossX - 20,
    OceanCutBossY - 10,
    40,
    40,
    0 + QUARTER_PI,
    PI + QUARTER_PI
  );
  fill("cyan");
  arc(
    OceanCutBossX + 20,
    OceanCutBossY - 10,
    40,
    40,
    0 - QUARTER_PI,
    PI - QUARTER_PI
  );

  if (OceanCutBackBlue <= 0) {
    OceanBossBlue = OceanBossBlue - 5;
  }

  fill(ColorCircle);
  //Bottom
  arc(OceanQuadX1, OceanQuadY1, 25, 25, QUARTER_PI, HALF_PI + QUARTER_PI);
  //Left
  arc(OceanQuadX2, OceanQuadY2, 25, 25, HALF_PI + QUARTER_PI, PI + QUARTER_PI);
  //Top
  arc(OceanQuadX3, OceanQuadY3, 25, 25, PI + QUARTER_PI, PI + PI - QUARTER_PI);
  //Right
  arc(OceanQuadX4, OceanQuadY4, 25, 25, PI + PI - QUARTER_PI, QUARTER_PI);

  fill(100);
  ellipse(CutSharkX1, CutSharkY1, 100, 30);
  ellipse(CutSharkX2, CutSharkY2, 100, 30);
  ellipse(CutSharkX3, CutSharkY3, 30, 100);
  ellipse(CutSharkX4, CutSharkY4, 30, 100);

  if (OceanBossBlue <= 0) {
    CutSharkX1 = CutSharkX1 + 10;
    CutSharkX2 = CutSharkX2 - 10;
    CutSharkY3 = CutSharkY3 - 10;
    CutSharkY4 = CutSharkY4 + 10;
  }

  if (
    CutSharkX1 >= 200 &&
    CutSharkX2 <= 200 &&
    CutSharkY3 <= 200 &&
    CutSharkY4 >= 200 &&
    oceantime <= 100
  ) {
    CutSharkX1 = 200;
    CutSharkX2 = 200;
    CutSharkY3 = 200;
    CutSharkY4 = 200;
    oceantime = oceantime + 1;
  }

  if (oceantime > 100) {
    CutSharkX1 = CutSharkX1 + 5;
    CutSharkX2 = CutSharkX2 - 5;
    CutSharkY3 = CutSharkY3 - 5;
    CutSharkY4 = CutSharkY4 + 5;
  }

  if (CutSharkX1 >= 700) {
    OceanPlayerRed = OceanPlayerRed - 5;
    OceanQuadY1 = OceanQuadY1 + 0.1;
    OceanQuadX2 = OceanQuadX2 - 0.1;
    OceanQuadY3 = OceanQuadY3 - 0.1;
    OceanQuadX4 = OceanQuadX4 + 0.1;
  }

  if (OceanPlayerRed <= -150) {
    OceanPlayerDie = true;
  }

  if (OceanPlayerDie == true) {
    OceanPlayerDie = false;
    screen = 1;
    x = 200;
    y = 200;
    oceantime = 0;
    oceanfightResult = 0;
    oceangame = true;
    OceanPlayerHealth = 200;
    OceanBossHealth = 400;
    SharkAttackX1 = 800;
    SharkAttackX2 = -400;
    SharkAttackX3 = 800;
    SharkAttackX4 = -400;
    YellowLightningY1 = -30000;
    YellowLightningY2 = -30000;
    YellowLightningY3 = -30000;
    YellowLightningY4 = -30000;
    YellowLightningY5 = -30000;
    CyanLightningY1 = -35000;
    CyanLightningY2 = -35000;
    CyanLightningY3 = -35000;
    CyanLightningY4 = -35000;
    OceanQuadX1 = 200;
    OceanQuadY1 = 200;
    OceanQuadX2 = 200;
    OceanQuadY2 = 200;
    OceanQuadX3 = 200;
    OceanQuadY3 = 200;
    OceanQuadX4 = 200;
    OceanQuadY4 = 200;
    OceanPlayerRed = 255;
    OceanCutBossX = 200;
    OceanCutBossY = 75;
    OceanBossBlue = 200;
    OceanCutBackBlue = 50;
    CutSharkX1 = -100;
    CutSharkY1 = 200;
    CutSharkX2 = 500;
    CutSharkY2 = 200;
    CutSharkX3 = 200;
    CutSharkY3 = 500;
    CutSharkX4 = 200;
    CutSharkY4 = -100;
  }
}
function OceanYouTie() {
  background("yellow");
  textSize(80);
  text("You...Tied?", 1, 150);
  fill("black");
  circle(150, 200, 50);
  circle(250, 200, 50);
  rect(100, 250, 200, 20);
}
function OceanOrbLocation() {
  background(0, 0, 50);
  fill(0, 0, 75);
  rect(185, 0, 30, 400);

  x = 200;

  if (y - 12.5 <= 0) {
    y = 12.5;
  }

  if (y + 12.5 >= 400 && item2 == false) {
    y = 387.5;
  }

  if (y + 12.5 >= 400 && item2 == true) {
    screen = 1;
    y = 50;
  }
}

function TundraBossEntrance() {
  background(225);
  strokeWeight(1);
  stroke(0);
  fill(ColorCircle);
  circle(TundraEntrCutX, TundraEntrCutY, 25);
  TundraEntrCutX = TundraEntrCutX - TundraEntrCutSpeed;
  if (TundraEntrCutX <= 300 && TundraEntrApproach == false) {
    TundraEntrCutSpeed = 0;
    TundraEntrTimer = TundraEntrTimer + TundraEntrTimerRiser;
  }
  strokeWeight(0);
  fill(TundraEntrBody);
  circle(TundraBossEntrX, TundraBossEntrY, 100);
  fill(TundraEntrRightEye);
  arc(
    TundraBossEntrX + 20,
    TundraBossEntrY - 10,
    40,
    40,
    0 - QUARTER_PI,
    PI - QUARTER_PI
  );
  fill(TundraEntrLeftEye);
  arc(
    TundraBossEntrX - 20,
    TundraBossEntrY - 10,
    40,
    40,
    0 + QUARTER_PI,
    PI + QUARTER_PI
  );

  TundraBossEntrX = TundraBossEntrX + TundraBossEntrSpeed;

  if (TundraEntrCutX <= 300 && TundraEntrTimer >= 50) {
    TundraEntrBody = TundraEntrBody + 2;
    TundraEntrRightEye = TundraEntrRightEye - 4;
    //TundraEntrTimerRiser = 0;
  }
  if (TundraEntrBody >= 255) {
    TundraEntrBody = 255;
    //TundraEntrTimer = 0.5;
  }

  if (TundraEntrRightEye <= 145) {
    TundraEntrRightEye = 145;
  }

  if (
    TundraEntrBody == 255 &&
    TundraEntrRightEye == 145 &&
    TundraEntrTimer >= 100
  ) {
    TundraEntrCutSpeed = 1;
    TundraBossEntrSpeed = 1;
    TundraEntrApproach = true;
    TundraEntrDarkness = TundraEntrDarkness + 3.5;
  }

  if (TundraBossEntrX + 50 >= TundraEntrCutX - 12.5) {
    TundraEntrCutSpeed = 0;
    TundraBossEntrSpeed = 0;
    TundraEntrSkip = true;
  }

  fill(0, 0, 0, TundraEntrDarkness);
  rect(0, 0, 400, 400);

  if (TundraEntrDarkness >= 270) {
    screen = 4.3;
  }
}
function TundraBossBattle() {
  background(225);
  fill(255);
  rect(250, 0, 25, 400);

  if (tundragame == true) {
    Player();
    TundraBoss();
    TundraBossBar();
    TundraPlayerBar();
    HailAttack();
    SnowAttack();
  }
  if (tundragame == false && tundrafightResult == 1) {
    TundraYouWin();
  }
  if (tundragame == false && tundrafightResult == 2) {
    TundraYouLose();
  }
  if (tundragame == false && tundrafightResult == 3) {
    TundraYouTied();
  }
  if (x + 12.5 >= 400) {
    x = 387.5;
  }
  if (x - 12.5 <= 275) {
    x = 287.5;
  }
  if (y + 12.5 >= 400) {
    y = 387.5;
  }
  if (y - 12.5 <= 0) {
    y = 12.5;
  }
  if (tundrafightResult == 0) {
    if (mouseIsPressed) {
      if (mouseButton === LEFT) tundrashoot = true;
      tundrashotX = x - 8;
      tundrashotY = y;
    }
    if (tundrashoot == true) {
      tundrashotX = tundrashotX - 10;
      fill("black");
      circle(tundrashotX, tundrashotY, 10);
    }
  }
}
function TundraBoss() {
  strokeWeight(1);
  noStroke();
  //stroke(0);
  fill(255);
  circle(TundraBossX, TundraBossY, 100);
  fill(145);
  arc(
    TundraBossX + 20,
    TundraBossY - 10,
    40,
    40,
    0 - QUARTER_PI,
    PI - QUARTER_PI
  );
  //arc(TundraBossX - 20, TundraBossY - 10, 40, 40, 0 + QUARTER_PI, PI + QUARTER_PI);
  fill(225);
  arc(
    TundraBossX - 20,
    TundraBossY - 10,
    40,
    40,
    0 + QUARTER_PI,
    PI + QUARTER_PI
  );
  //arc(TundraBossX + 20, TundraBossY - 10, 40, 40, 0 - QUARTER_PI, PI - QUARTER_PI);

  TundraBossY = TundraBossY + tundraspeed;

  if (TundraBossY == 200) {
    tundraspeed = tundraspeed * 1;
  }
  if (TundraBossY >= 350) {
    tundraspeed = tundraspeed * -1;
  }
  if (TundraBossY <= 50) {
    tundraspeed = tundraspeed * -1;
  }
}
function TundraBossBar() {
  fill("grey");
  rect(0, 0, 20, 400);
  fill(TundraBossHealthBarColor);
  rect(0, TundraBossHealth, 20, 400);

  if (
    tundrashotX + 5 >= TundraBossX - 50 &&
    tundrashotX - 5 <= TundraBossX + 50 &&
    tundrashotY + 5 >= TundraBossY - 50 &&
    tundrashotY - 5 <= TundraBossY + 50
  ) {
    TundraBossHealth = TundraBossHealth + TundraShotDamage;
  }
  if (TundraBossHealth < 200) {
    TundraBossHealthBarColor = "green";
  }

  if (TundraBossHealth >= 200 && TundraBossHealth < 350) {
    TundraBossHealthBarColor = "yellow";
  }
  if (TundraBossHealth >= 350) {
    TundraBossHealthBarColor = "red";
  }
  if (TundraBossHealth >= 400) {
    tundragame = false;
    tundrafightResult = 1;
  }
}
function TundraPlayerBar() {
  fill("grey");
  rect(380, 200, 20, 400);
  fill(TundraPlayerHealthBarColor);
  rect(380, TundraPlayerHealth, 20, 400);
  //PlayerHealth = 200 and increase because it is Y coordinate

  if (TundraPlayerHealth < 300) {
    TundraPlayerHealthBarColor = "green";
  }
  if (TundraPlayerHealth >= 300) {
    TundraPlayerHealthBarColor = "yellow";
  }
  if (TundraPlayerHealth >= 360) {
    TundraPlayerHealthBarColor = "red";
  }
  if (TundraPlayerHealth >= 400) {
    tundragame = false;
    tundrafightResult = 2;
  }
}
function HailAttack() {
  //HailAttack(X/Y)#
  //HailSpeed
  fill(255);
  rect(HailAttackX1, HailAttackY1, 25, 25);
  rect(HailAttackX2, HailAttackY2, 25, 25);
  rect(HailAttackX3, HailAttackY3, 25, 25);
  rect(HailAttackX5, HailAttackY5, 25, 25);
  rect(HailAttackX6, HailAttackY6, 25, 25);
  //Speed
  HailAttackX1 = HailAttackX1 + HailSpeed1;
  HailAttackX2 = HailAttackX2 + HailSpeed2;
  HailAttackX3 = HailAttackX3 + HailSpeed3;
  HailAttackX5 = HailAttackX5 + HailSpeed5;
  HailAttackX6 = HailAttackX6 + HailSpeed6;

  if (
    HailAttackX1 + 12.5 >= x - 12.5 &&
    HailAttackX1 <= x + 12.5 &&
    ((HailAttackY1 <= y + 12.5 && HailAttackY1 + 12.5 >= y - 12.5) ||
      (y + 12.5 <= HailAttackY1 + 12.5 && y + 12.5 >= HailAttackY1))
  ) {
    TundraPlayerHealth = TundraPlayerHealth + HailHealthDecrease;
  }

  if (
    HailAttackX2 + 12.5 >= x - 12.5 &&
    HailAttackX2 <= x + 12.5 &&
    ((HailAttackY2 <= y + 12.5 && HailAttackY2 + 12.5 >= y - 12.5) ||
      (y + 12.5 <= HailAttackY2 + 12.5 && y + 12.5 >= HailAttackY2))
  ) {
    TundraPlayerHealth = TundraPlayerHealth + HailHealthDecrease;
  }

  if (
    HailAttackX3 + 12.5 >= x - 12.5 &&
    HailAttackX3 <= x + 12.5 &&
    ((HailAttackY3 <= y + 12.5 && HailAttackY3 + 12.5 >= y - 12.5) ||
      (y + 12.5 <= HailAttackY3 + 12.5 && y + 12.5 >= HailAttackY3))
  ) {
    TundraPlayerHealth = TundraPlayerHealth + HailHealthDecrease;
  }
  if (
    HailAttackX5 + 12.5 >= x - 12.5 &&
    HailAttackX5 <= x + 12.5 &&
    ((HailAttackY5 <= y + 12.5 && HailAttackY5 + 12.5 >= y - 12.5) ||
      (y + 12.5 <= HailAttackY5 + 12.5 && y + 12.5 >= HailAttackY5))
  ) {
    TundraPlayerHealth = TundraPlayerHealth + HailHealthDecrease;
  }
  if (
    HailAttackX6 + 12.5 >= x - 12.5 &&
    HailAttackX6 <= x + 12.5 &&
    ((HailAttackY6 <= y + 12.5 && HailAttackY6 + 12.5 >= y - 12.5) ||
      (y + 12.5 <= HailAttackY6 + 12.5 && y + 12.5 >= HailAttackY6))
  ) {
    TundraPlayerHealth = TundraPlayerHealth + HailHealthDecrease;
  }
  //Return
  if (HailAttackX1 >= 1100) {
    HailAttackX1 = -500;
    HailSpeed1 = random(5, 7);
  }
  if (HailAttackX2 >= 1100) {
    HailAttackX2 = -500;
    HailSpeed2 = random(5, 7);
  }
  if (HailAttackX3 >= 1100) {
    HailAttackX3 = -500;
    HailSpeed1 = random(5, 7);
  }

  if (HailAttackX5 >= 1100) {
    HailAttackX5 = -500;
    HailSpeed5 = random(5, 7);
  }
  if (HailAttackX6 >= 1100) {
    HailAttackX6 = -500;
    HailSpeed6 = random(5, 7);
  }
}
function SnowAttack() {
  //SnowAttack(X/Y)#
  fill(255);
  //Difference of 25
  rect(SnowAttackX1, SnowAttackY1, 25, 100);
  rect(SnowAttackX2, SnowAttackY2, 25, 100);
  rect(SnowAttackX3, SnowAttackY3, 25, 100);
  rect(SnowAttackX4, SnowAttackY4, 25, 100);
  rect(SnowAttackX5, SnowAttackY5, 25, 100);
  //Speed
  SnowAttackY1 = SnowAttackY1 + TopSnowSpeed1;
  SnowAttackY2 = SnowAttackY2 - BottomSnowSpeed1;
  SnowAttackY3 = SnowAttackY3 + TopSnowSpeed2;
  SnowAttackY4 = SnowAttackY4 - BottomSnowSpeed2;
  SnowAttackY5 = SnowAttackY5 + TopSnowSpeed3;

  //Damage
  if (
    SnowAttackX1 + 25 >= x - 12.5 &&
    SnowAttackX1 <= x + 12.5 &&
    ((SnowAttackY1 <= y + 12.5 && SnowAttackY1 + 25 >= y - 12.5) ||
      (y + 12.5 <= SnowAttackY1 + 25 && y + 12.5 >= SnowAttackY1))
  ) {
    TundraPlayerHealth = TundraPlayerHealth + SnowHealthDecrease;
  }
  if (
    SnowAttackX2 + 25 >= x - 12.5 &&
    SnowAttackX2 <= x + 12.5 &&
    ((SnowAttackY2 <= y + 12.5 && SnowAttackY2 + 25 >= y - 12.5) ||
      (y + 12.5 <= SnowAttackY2 + 25 && y + 12.5 >= SnowAttackY2))
  ) {
    TundraPlayerHealth = TundraPlayerHealth + SnowHealthDecrease;
  }
  if (
    SnowAttackX3 + 25 >= x - 12.5 &&
    SnowAttackX3 <= x + 12.5 &&
    ((SnowAttackY3 <= y + 12.5 && SnowAttackY3 + 25 >= y - 12.5) ||
      (y + 12.5 <= SnowAttackY3 + 25 && y + 12.5 >= SnowAttackY3))
  ) {
    TundraPlayerHealth = TundraPlayerHealth + SnowHealthDecrease;
  }
  if (
    SnowAttackX4 + 25 >= x - 12.5 &&
    SnowAttackX4 <= x + 12.5 &&
    ((SnowAttackY4 <= y + 12.5 && SnowAttackY4 + 25 >= y - 12.5) ||
      (y + 12.5 <= SnowAttackY4 + 25 && y + 12.5 >= SnowAttackY4))
  ) {
    TundraPlayerHealth = TundraPlayerHealth + SnowHealthDecrease;
  }
  if (
    SnowAttackX5 + 25 >= x - 12.5 &&
    SnowAttackX5 <= x + 12.5 &&
    ((SnowAttackY5 <= y + 12.5 && SnowAttackY5 + 25 >= y - 12.5) ||
      (y + 12.5 <= SnowAttackY5 + 25 && y + 12.5 >= SnowAttackY5))
  ) {
    TundraPlayerHealth = TundraPlayerHealth + SnowHealthDecrease;
  }
  //Return
  if (SnowAttackY1 >= 2000) {
    SnowAttackY1 = -1400;
    TopSnowSpeed1 = random(5, 7);
  }
  if (SnowAttackY2 <= -1400) {
    SnowAttackY2 = 1600;
    BottomSnowSpeed1 = random(5, 7);
  }
  if (SnowAttackY3 >= 2400) {
    SnowAttackY3 = -1800;
    TopSnowSpeed2 = random(5, 7);
  }
  if (SnowAttackY4 <= -1800) {
    SnowAttackY4 = 2000;
    BottomSnowSpeed2 = random(5, 7);
  }
  if (SnowAttackY5 >= 2800) {
    SnowAttackY5 = -2200;
    TopSnowSpeed3 = random(5, 7);
  }
}
function TundraYouWin() {
  background(TundraCutSceneBackground);
  tundrashoot = false;
  Laser = ColorCircle;
  TundraCutSceneBackground = TundraCutSceneBackground - 5;
  strokeWeight(1);
  noStroke();
  //stroke("black");
  fill(ColorCircle);
  circle(TundraCutx, TundraCuty, 25);

  strokeWeight(TundraBossWeight);
  noStroke();
  //stroke(0);
  fill(TundraBossColor);
  arc(TundraQuadBossX1, TundraQuadBossY1, 100, 100, 0, HALF_PI);
  arc(TundraQuadBossX2, TundraQuadBossY2, 100, 100, HALF_PI, PI);
  arc(TundraQuadBossX3, TundraQuadBossY3, 100, 100, PI, PI + HALF_PI);
  arc(TundraQuadBossX4, TundraQuadBossY4, 100, 100, PI + HALF_PI, 0);
  fill(145);
  arc(CutTundraLeftEyeX, 190, 40, 40, 0 - QUARTER_PI, PI - QUARTER_PI);
  fill(225);
  arc(CutTundraRightEyeX, 190, 40, 40, 0 + QUARTER_PI, PI + QUARTER_PI);

  fill(Laser);
  rect(TundraLaserX, 100, TundraLaserWidth, 200);

  if (TundraCutSceneBackground <= -200) {
    TundraLaserWidth = TundraLaserWidth - 30;

    tundratime = tundratime + 1;

    if (tundratime >= 150) {
      TundraLaserX = TundraLaserX - 10;
      CutTundraLeftEyeX = 800;
      CutTundraRightEyeX = -900;
    }

    if (TundraLaserX <= -800) {
      TundraCutx = TundraCutx + 1;
    }

    if (TundraCutx >= 450) {
      TundraBossWeight = 0;
      TundraBossColor = TundraBossColor - 5;
      TundraQuadBossX1 = TundraQuadBossX1 + 0.1;
      TundraQuadBossX2 = TundraQuadBossX2 - 0.1;
      TundraQuadBossX3 = TundraQuadBossX3 - 0.1;
      TundraQuadBossX4 = TundraQuadBossX4 + 0.1;

      TundraQuadBossY1 = TundraQuadBossY1 + 0.1;
      TundraQuadBossY2 = TundraQuadBossY2 + 0.1;
      TundraQuadBossY3 = TundraQuadBossY3 - 0.1;
      TundraQuadBossY4 = TundraQuadBossY4 - 0.1;
    }
  }
  if (TundraBossColor <= 0) {
    TundraBossDie = true;
  }
  if (TundraBossDie == true) {
    TundraBossDie = false;
    screen = 4.6;
    x = 350;
    y = 200;
  }
}
function TundraYouLose() {
  background(SnowBackground);
  tundrashoot = false;
  Laser = ColorCircle;
  fill(ColorCircle);
  strokeWeight(TundraPlayerWeight);
  noStroke();
  //stroke(1);
  arc(TundraQuadX1, TundraQuadY1, 25, 25, 0, HALF_PI);
  arc(TundraQuadX2, TundraQuadY2, 25, 25, HALF_PI, PI);
  arc(TundraQuadX3, TundraQuadY3, 25, 25, PI, PI + HALF_PI);
  arc(TundraQuadX4, TundraQuadY4, 25, 25, PI + HALF_PI, 0);

  strokeWeight(0);
  fill(255);
  rect(AvalancheX, AvalancheY, 2000, 400);
  AvalancheX = AvalancheX + 7;

  fill(255);
  strokeWeight(TundraBossWeight);
  circle(TundraCutBossX, TundraCutBossY, 100);
  fill(145);
  arc(120, 190, 40, 40, 0 - QUARTER_PI, PI - QUARTER_PI);
  fill(225);
  arc(80, 190, 40, 40, 0 + QUARTER_PI, PI + QUARTER_PI);

  if (AvalancheX >= -500) {
    SnowBackground = SnowBackground + 1;

    if (TundraPlayerBlue >= 250) {
      TundraPlayerBlue = 250;
    }
    if (TundraPlayerGreen >= 250) {
      TundraPlayerGreen = 250;
    }
  }

  if (AvalancheX >= -1600) {
    TundraBossWeight = TundraBossWeight - 0.01;
  }

  if (AvalancheX >= 800 && TundraBossWeight <= -1) {
    TundraQuadX1 = TundraQuadX1 + 0.1;
    TundraQuadX2 = TundraQuadX2 - 0.1;
    TundraQuadX3 = TundraQuadX3 - 0.1;
    TundraQuadX4 = TundraQuadX4 + 0.1;
    TundraQuadY1 = TundraQuadY1 + 0.1;
    TundraQuadY2 = TundraQuadY2 + 0.1;
    TundraQuadY3 = TundraQuadY3 - 0.1;
    TundraQuadY4 = TundraQuadY4 - 0.1;

    TundraPlayerBlue = TundraPlayerBlue + 10;
    TundraPlayerGreen = TundraPlayerGreen + 10;
    TundraPlayerRed = 250;
    TundraPlayerWeight = 0;
  }

  if (
    TundraPlayerRed == 250 &&
    TundraPlayerGreen >= 255 &&
    TundraPlayerBlue >= 255
  ) {
    TundraPlayerDie = true;
  }

  if (TundraPlayerDie == true) {
    TundraPlayerDie = false;
    screen = 1;
    x = 200;
    y = 200;
    tundrafightResult = 0;
    tundragame = true;
    TundraPlayerHealth = 200;
    TundraBossHealth = 0;
    HailAttackX1 = -700;
    HailAttackX2 = -700;
    HailAttackX3 = -700;
    HailAttackX5 = -700;
    HailAttackX6 = -700;
    SnowAttackY1 = -1600;
    SnowAttackY2 = 1800;
    SnowAttackY3 = -2000;
    SnowAttackY4 = 2200;
    SnowAttackY5 = -2400;
    SnowBackground = 225;
    TundraCutBossX = 100;
    TundraCutBossY = 200;
    TundraQuadX1 = 325;
    TundraQuadY1 = 200;
    TundraQuadX2 = 325;
    TundraQuadY2 = 200;
    TundraQuadX3 = 325;
    TundraQuadY3 = 200;
    TundraQuadX4 = 325;
    TundraQuadY4 = 200;
    TundraPlayerRed = 255;
    TundraPlayerGreen = 0;
    TundraPlayerBlue = 0;
    TundraPlayerWeight = 1;
    TundraBossWeight = 1;
    AvalancheX = -2400;
    AvalancheY = 0;
  }
}
function TundraOrbLocation() {
  background(255);
  fill(205);
  strokeWeight(1);
  noStroke();
  //stroke(1);
  rect(0, 185, 400, 30);

  y = 200;

  if (x - 12.5 <= 0) {
    x = 12.5;
  }
  if (x + 12.5 >= 400 && item3 == false) {
    x = 387.5;
  }
  if (x + 12.5 >= 400 && item3 == true) {
    screen = 1;
    x = 50;
  }
}

function DesertBossEntrance() {
  background(225, 140, 0);
  strokeWeight(1);
  stroke(0);
  fill(ColorCircle);
  circle(DesertEntrCutX, DesertEntrCutY, 25);
  DesertEntrCutX = DesertEntrCutX + DesertEntrCutSpeed;

  if (DesertEntrCutX >= 100 && DesertEntrApproach == false) {
    DesertEntrCutSpeed = 0;
    DesertEntrTimer = DesertEntrTimer + DesertEntrTimerRiser;
  }

  strokeWeight(0);
  fill(225, 80, 0);
  circle(DesertBossEntrX, DesertBossEntrY, DesertBossEntrSize);
  fill(0, 200, 0);
  arc(
    DesertBossEntrX - 20,
    DesertBossEntrY - 10,
    DesertBossEntrSize / 2.5,
    DesertBossEntrSize / 2.5,
    0 + QUARTER_PI,
    PI + QUARTER_PI
  );
  fill("orange");
  arc(
    DesertBossEntrX + 20,
    DesertBossEntrY - 10,
    DesertBossEntrSize / 2.5,
    DesertBossEntrSize / 2.5,
    0 - QUARTER_PI,
    PI - QUARTER_PI
  );

  DesertBossEntrSize = DesertBossEntrSize + DesertBossEntrGrowth;
  DesertBossEntrX = DesertBossEntrX - DesertBossEntrSpeed;

  if (DesertEntrTimer >= 50) {
    DesertBossEntrGrowth = 1;
    DesertEntrTimerRiser = 0;
  }

  if (DesertBossEntrSize >= 100) {
    DesertBossEntrSize = 100;
    DesertBossEntrGrowth = 0;
    DesertEntrTimerRiser = 0.5;
  }

  if (DesertEntrTimer >= 75) {
    DesertEntrApproach = true;
    DesertEntrCutSpeed = 1;
    DesertBossEntrSpeed = 1;
    DesertEntrDarkness = DesertEntrDarkness + 3.5;
  }

  if (DesertEntrCutX + 12.5 >= DesertBossEntrX - 50) {
    DesertBossEntrSpeed = 0;
    DesertEntrCutSpeed = 0;
  }

  fill(0, 0, 0, DesertEntrDarkness);
  rect(0, 0, 400, 400);

  if (DesertEntrDarkness >= 270) {
    DesertEntrSkip = true;
    screen = 5.3;
  }
}
function DesertBossBattle() {
  background(225, 140, 0);
  fill("blue");
  rect(150, -100, 15, 600);

  if (desertgame == true) {
    Player();
    DesertBoss();
    DesertPlayerBar();
    DesertBossBar();
    Cactus();
    Sand();
  }

  if (desertgame == false && desertfightResult == 1) {
    DesertPlayerWin();
  }
  if (desertgame == false && desertfightResult == 2) {
    DesertBossWin();
  }

  if (x - 12.5 <= 0) {
    x = 12.5;
  }
  if (x + 12.5 >= 150) {
    x = 137.5;
  }
  if (y + 12.5 >= 400) {
    y = 387.5;
  }
  if (y - 12.5 <= 0) {
    y = 12.5;
  }
  if (desertfightResult == 0) {
    if (mouseIsPressed) {
      if (mouseButton === LEFT) desertshoot = true;
      desertshotX = x + 8;
      desertshotY = y;
    }
    if (desertshoot == true) {
      desertshotX = desertshotX + 10;
      fill("black");
      circle(desertshotX, desertshotY, 10);
    }
  }
}
function DesertBoss() {
  fill(225, 80, 0);
  circle(DesertBossX, DesertBossY, 100);
  fill(0, 200, 0);
  arc(
    DesertBossX - 20,
    DesertBossY - 10,
    40,
    40,
    0 + QUARTER_PI,
    PI + QUARTER_PI
  );
  fill("orange");
  arc(
    DesertBossX + 20,
    DesertBossY - 10,
    40,
    40,
    0 - QUARTER_PI,
    PI - QUARTER_PI
  );

  DesertBossY = DesertBossY + desertspeed;

  if (DesertBossY == 200) {
    desertspeed = desertspeed * 1;
  }
  if (DesertBossY >= 350) {
    desertspeed = desertspeed * -1;
  }
  if (DesertBossY <= 50) {
    desertspeed = desertspeed * -1;
  }
}
function DesertPlayerBar() {
  fill("grey");
  rect(0, 200, 20, 400);
  fill(DesertPlayerHealthBarColor);
  rect(0, DesertPlayerHealth, 20, 400);
  //DesertPlayerHealth = 200 and increase because it is Y coordinate

  if (DesertPlayerHealth < 300) {
    DesertPlayerHealthBarColor = "green";
  }

  if (DesertPlayerHealth >= 300) {
    DesertPlayerHealthBarColor = "yellow";
  }
  if (DesertPlayerHealth >= 360) {
    DesertPlayerHealthBarColor = "red";
  }
  if (DesertPlayerHealth >= 400) {
    desertgame = false;
    desertfightResult = 2;
  }
}
function DesertBossBar() {
  fill("grey");
  rect(380, 0, 20, 400);
  fill(DesertBossHealthBarColor);
  rect(380, DesertBossHealth, 20, 400);

  if (
    desertshotX + 5 >= DesertBossX - 50 &&
    desertshotX - 5 <= DesertBossX + 50 &&
    desertshotY + 5 >= DesertBossY - 50 &&
    desertshotY - 5 <= DesertBossY + 50
  ) {
    DesertBossHealth = DesertBossHealth + DesertShotDamage;
  }

  if (DesertBossHealth < 200) {
    DesertBossHealthBarColor = "green";
  }
  if (DesertBossHealth >= 200 && DesertBossHealth < 350) {
    DesertBossHealthBarColor = "yellow";
  }
  if (DesertBossHealth >= 350) {
    DesertBossHealthBarColor = "red";
  }
  if (DesertBossHealth >= 400) {
    desertgame = false;
    desertfightResult = 1;
  }
}
function Cactus() {
  fill(0, 200, 0);
  
  let CactusMinimumY = 100;
  let CactusMaximumY = 400 - CactusMinimumY;
  
  //One
  circle(CactusX1, CactusY1, 40);
  CactusX1 = CactusX1 - CactusX1Speed;

  CactusY1 = CactusY1 + CactusY1Speed;

  if (CactusY1 >= CactusMaximumY) {
    CactusY1Speed = CactusY1Speed - 1;
  }
  if (CactusY1 <= CactusMinimumY) {
    CactusY1Speed = CactusY1Speed + 1;
  }
  //Two
  circle(CactusX2, CactusY2, 40);
  CactusX2 = CactusX2 - CactusX2Speed;

  CactusY2 = CactusY2 - CactusY2Speed;

  if (CactusY2 >= CactusMaximumY) {
    CactusY2Speed = CactusY2Speed + 1;
  }
  if (CactusY2 <= CactusMinimumY) {
    CactusY2Speed = CactusY2Speed - 1;
  }
  //Three
  circle(CactusX3, CactusY3, 40);
  CactusX3 = CactusX3 - CactusX3Speed;

  CactusY3 = CactusY3 + CactusY3Speed;

  if (CactusY3 >= CactusMaximumY) {
    CactusY3Speed = CactusY3Speed - 1;
  }
  if (CactusY3 <= CactusMinimumY) {
    CactusY3Speed = CactusY3Speed + 1;
  }
  //Four
  circle(CactusX4, CactusY4, 40);
  CactusX4 = CactusX4 - CactusX4Speed;

  CactusY4 = CactusY4 - CactusY4Speed;

  if (CactusY4 >= CactusMaximumY) {
    CactusY4Speed = CactusY4Speed + 1;
  }
  if (CactusY4 <= CactusMinimumY) {
    CactusY4Speed = CactusY4Speed - 1;
  }
  //Five
  circle(CactusX5, CactusY5, 40);
  CactusX5 = CactusX5 - CactusX5Speed;

  CactusY5 = CactusY5 + CactusY5Speed;

  if (CactusY5 >= CactusMaximumY) {
    CactusY5Speed = CactusY5Speed - 1;
  }
  if (CactusY5 <= CactusMinimumY) {
    CactusY5Speed = CactusY5Speed + 1;
  }
  //Six
  circle(CactusX6, CactusY6, 40);
  CactusX6 = CactusX6 - CactusX6Speed;

  CactusY6 = CactusY6 - CactusY6Speed;

  if (CactusY6 >= CactusMaximumY) {
    CactusY6Speed = CactusY6Speed + 1;
  }
  if (CactusY6 <= CactusMinimumY) {
    CactusY6Speed = CactusY6Speed - 1;
  }

  //Return
  if (CactusX1 <= -1500) {
    CactusX1 = 700;
  }
  if (CactusX2 <= -1500) {
    CactusX2 = 700;
  }
  if (CactusX3 <= -1400) {
    CactusX3 = 800;
  }
  if (CactusX4 <= -1400) {
    CactusX4 = 800;
  }
  if (CactusX5 <= -1300) {
    CactusX5 = 900;
  }
  if (CactusX6 <= -1300) {
    CactusX6 = 900;
  }
  //Seven
  circle(CactusX7, CactusY7, 40);
  CactusX7 = CactusX7 - CactusX7Speed;

  CactusY7 = CactusY7 + CactusY7Speed;

  if (CactusY7 >= CactusMaximumY) {
    CactusY7Speed = CactusY7Speed - 1;
  }
  if (CactusY7 <= CactusMinimumY) {
    CactusY7Speed = CactusY7Speed + 1;
  }
  //Eight
  circle(CactusX8, CactusY8, 40);
  CactusX8 = CactusX8 - CactusX8Speed;

  CactusY8 = CactusY8 - CactusY8Speed;

  if (CactusY8 >= CactusMaximumY) {
    CactusY8Speed = CactusY8Speed + 1;
  }
  if (CactusY8 <= CactusMinimumY) {
    CactusY8Speed = CactusY8Speed - 1;
  }
  //Nine
  circle(CactusX9, CactusY9, 40);
  CactusX9 = CactusX9 - CactusX9Speed;

  CactusY9 = CactusY9 + CactusY9Speed;

  if (CactusY9 >= CactusMaximumY) {
    CactusY9Speed = CactusY9Speed - 1;
  }
  if (CactusY9 <= CactusMinimumY) {
    CactusY9Speed = CactusY9Speed + 1;
  }
  //Ten
  circle(CactusX10, CactusY10, 40);
  CactusX10 = CactusX10 - CactusX10Speed;

  CactusY10 = CactusY10 - CactusY10Speed;

  if (CactusY10 >= CactusMaximumY) {
    CactusY10Speed = CactusY10Speed + 1;
  }
  if (CactusY10 <= CactusMinimumY) {
    CactusY10Speed = CactusY10Speed - 1;
  }

  //Return
  if (CactusX1 <= -1500) {
    CactusX1 = 700;
  }
  if (CactusX2 <= -1500) {
    CactusX2 = 700;
  }
  if (CactusX3 <= -1400) {
    CactusX3 = 800;
  }
  if (CactusX4 <= -1400) {
    CactusX4 = 800;
  }
  if (CactusX5 <= -1300) {
    CactusX5 = 900;
  }
  if (CactusX6 <= -1300) {
    CactusX6 = 900;
  }
  if (CactusX7 <= -1200) {
    CactusX7 = 1000;
  }
  if (CactusX8 <= -1200) {
    CactusX8 = 1000;
  }
  if (CactusX9 <= -1100) {
    CactusX9 = 1100;
  }
  if (CactusX10 <= -1100) {
    CactusX10 = 1100;
  }

  //Damage
  if (
    x + 12.5 >= CactusX1 - 20 &&
    x - 12.5 <= CactusX1 + 20 &&
    y + 12.5 >= CactusY1 - 20 &&
    y - 12.5 <= CactusY1 + 20
  ) {
    DesertPlayerHealth = DesertPlayerHealth + CactusDamage;
  }
  if (
    x + 12.5 >= CactusX2 - 20 &&
    x - 12.5 <= CactusX2 + 20 &&
    y + 12.5 >= CactusY2 - 20 &&
    y - 12.5 <= CactusY2 + 20
  ) {
    DesertPlayerHealth = DesertPlayerHealth + CactusDamage;
  }
  if (
    x + 12.5 >= CactusX3 - 20 &&
    x - 12.5 <= CactusX3 + 20 &&
    y + 12.5 >= CactusY3 - 20 &&
    y - 12.5 <= CactusY3 + 20
  ) {
    DesertPlayerHealth = DesertPlayerHealth + CactusDamage;
  }
  if (
    x + 12.5 >= CactusX4 - 20 &&
    x - 12.5 <= CactusX4 + 20 &&
    y + 12.5 >= CactusY4 - 20 &&
    y - 12.5 <= CactusY4 + 20
  ) {
    DesertPlayerHealth = DesertPlayerHealth + CactusDamage;
  }
  if (
    x + 12.5 >= CactusX5 - 20 &&
    x - 12.5 <= CactusX5 + 20 &&
    y + 12.5 >= CactusY5 - 20 &&
    y - 12.5 <= CactusY5 + 20
  ) {
    DesertPlayerHealth = DesertPlayerHealth + CactusDamage;
  }
  if (
    x + 12.5 >= CactusX6 - 20 &&
    x - 12.5 <= CactusX6 + 20 &&
    y + 12.5 >= CactusY6 - 20 &&
    y - 12.5 <= CactusY6 + 20
  ) {
    DesertPlayerHealth = DesertPlayerHealth + CactusDamage;
  }
  if (
    x + 12.5 >= CactusX7 - 20 &&
    x - 12.5 <= CactusX7 + 20 &&
    y + 12.5 >= CactusY7 - 20 &&
    y - 12.5 <= CactusY7 + 20
  ) {
    DesertPlayerHealth = DesertPlayerHealth + CactusDamage;
  }
  if (
    x + 12.5 >= CactusX8 - 20 &&
    x - 12.5 <= CactusX8 + 20 &&
    y + 12.5 >= CactusY8 - 20 &&
    y - 12.5 <= CactusY8 + 20
  ) {
    DesertPlayerHealth = DesertPlayerHealth + CactusDamage;
  }
  if (
    x + 12.5 >= CactusX9 - 20 &&
    x - 12.5 <= CactusX9 + 20 &&
    y + 12.5 >= CactusY9 - 20 &&
    y - 12.5 <= CactusY9 + 20
  ) {
    DesertPlayerHealth = DesertPlayerHealth + CactusDamage;
  }
  if (
    x + 12.5 >= CactusX10 - 20 &&
    x - 12.5 <= CactusX10 + 20 &&
    y + 12.5 >= CactusY10 - 20 &&
    y - 12.5 <= CactusY10 + 20
  ) {
    DesertPlayerHealth = DesertPlayerHealth + CactusDamage;
  }
}
function Sand() {
  fill("orange");
  triangle(SandXA1, SandYA1, SandXB1, SandYB1, SandXC1, SandYC1);
  triangle(SandXA2, SandYA2, SandXB2, SandYB2, SandXC2, SandYC2);
  triangle(SandXA3, SandYA3, SandXB3, SandYB3, SandXC3, SandYC3);
  triangle(SandXA4, SandYA4, SandXB4, SandYB4, SandXC4, SandYC4);
  triangle(SandXA5, SandYA5, SandXB5, SandYB5, SandXC5, SandYC5);
  triangle(SandXA6, SandYA6, SandXB6, SandYB6, SandXC6, SandYC6);
  triangle(SandXA7, SandYA7, SandXB7, SandYB7, SandXC7, SandYC7);

  //Travel
  if (space == true) {
    SandXA1 = SandXA1 - GunSpeedX1;
    SandXB1 = SandXB1 - GunSpeedX1;
    SandXC1 = SandXC1 - GunSpeedX1;

    SandYA1 = SandYA1 + GunSpeedY1;
    SandYB1 = SandYB1 + GunSpeedY1;
    SandYC1 = SandYC1 + GunSpeedY1;

    SandXA2 = SandXA2 - GunSpeedX2;
    SandXB2 = SandXB2 - GunSpeedX2;
    SandXC2 = SandXC2 - GunSpeedX2;

    SandYA2 = SandYA2 + GunSpeedY2;
    SandYB2 = SandYB2 + GunSpeedY2;
    SandYC2 = SandYC2 + GunSpeedY2;

    SandXA3 = SandXA3 - GunSpeedX3;
    SandXB3 = SandXB3 - GunSpeedX3;
    SandXC3 = SandXC3 - GunSpeedX3;

    SandYA3 = SandYA3 + GunSpeedY3;
    SandYB3 = SandYB3 + GunSpeedY3;
    SandYC3 = SandYC3 + GunSpeedY3;

    SandXA4 = SandXA4 - GunSpeedX4;
    SandXB4 = SandXB4 - GunSpeedX4;
    SandXC4 = SandXC4 - GunSpeedX4;

    SandYA4 = SandYA4 + GunSpeedY4;
    SandYB4 = SandYB4 + GunSpeedY4;
    SandYC4 = SandYC4 + GunSpeedY4;

    SandXA5 = SandXA5 - GunSpeedX5;
    SandXB5 = SandXB5 - GunSpeedX5;
    SandXC5 = SandXC5 - GunSpeedX5;

    SandYA5 = SandYA5 + GunSpeedY5;
    SandYB5 = SandYB5 + GunSpeedY5;
    SandYC5 = SandYC5 + GunSpeedY5;

    SandXA6 = SandXA6 - GunSpeedX6;
    SandXB6 = SandXB6 - GunSpeedX6;
    SandXC6 = SandXC6 - GunSpeedX6;

    SandYA6 = SandYA6 + GunSpeedY6;
    SandYB6 = SandYB6 + GunSpeedY6;
    SandYC6 = SandYC6 + GunSpeedY6;

    SandXA7 = SandXA7 - GunSpeedX7;
    SandXB7 = SandXB7 - GunSpeedX7;
    SandXC7 = SandXC7 - GunSpeedX7;

    SandYA7 = SandYA7 + GunSpeedY7;
    SandYB7 = SandYB7 + GunSpeedY7;
    SandYC7 = SandYC7 + GunSpeedY7;
  }

  //Turn
  if (space == true) {
    if (SandXA1 <= TurnPlace1) {
      SandXB1 = SandXA1 - 20;
      SandYB1 = SandYA1 - 70;
      SandXC1 = SandXA1 + 20;
      SandYC1 = SandYA1 - 70;
      GunSpeedX1 = 0;
      GunSpeedY1 = 5;
      SandTurned1 = true;
      //TurnPlace1 = random(20, 130);
    }

    if (SandXA2 <= TurnPlace2) {
      SandXB2 = SandXA2 - 20;
      SandYB2 = SandYA2 - 70;
      SandXC2 = SandXA2 + 20;
      SandYC2 = SandYA2 - 70;
      GunSpeedX2 = 0;
      GunSpeedY2 = 5;
      SandTurned2 = true;
      //TurnPlace2 = random(20, 130);
    }

    if (SandXA3 <= TurnPlace3) {
      SandXB3 = SandXA3 - 20;
      SandYB3 = SandYA3 - 70;
      SandXC3 = SandXA3 + 20;
      SandYC3 = SandYA3 - 70;
      GunSpeedX3 = 0;
      GunSpeedY3 = 5;
      SandTurned3 = true;
      //TurnPlace3 = random(20, 130);
    }

    if (SandXA5 <= TurnPlace5) {
      SandXB5 = SandXA5 + 20;
      SandYB5 = SandYA5 + 70;
      SandXC5 = SandXA5 - 20;
      SandYC5 = SandYA5 + 70;
      GunSpeedX5 = 0;
      GunSpeedY5 = -5;
      SandTurned5 = true;
      //TurnPlace5 = random(20, 130);
    }

    if (SandXA6 <= TurnPlace6) {
      SandXB6 = SandXA6 + 20;
      SandYB6 = SandYA6 + 70;
      SandXC6 = SandXA6 - 20;
      SandYC6 = SandYA6 + 70;
      GunSpeedX6 = 0;
      GunSpeedY6 = -5;
      SandTurned6 = true;
      //TurnPlace6 = random(20, 130);
    }

    if (SandXA7 <= TurnPlace7) {
      SandXB7 = SandXA7 + 20;
      SandYB7 = SandYA7 + 70;
      SandXC7 = SandXA7 - 20;
      SandYC7 = SandYA7 + 70;
      GunSpeedX7 = 0;
      GunSpeedY7 = -5;
      SandTurned7 = true;
      //TurnPlace7 = random(20, 130);
    }
  }

  //Getting impaled
  if (space == true) {
    
    /*
    if (
      SandXA1 <= x - 12.5 &&
      SandXB1 >= x + 12.5 &&
      ((SandYC1 <= y + 12.5 && SandYB1 >= y - 12.5) ||
        (y + 12.5 <= SandYB1 && y + 12.5 >= SandYC1))
    ) {
      DesertPlayerHealth = DesertPlayerHealth + SandDamage;
    }

    if (
      SandXA1 >= x - 12.5 &&
      SandXA1 - 20 <= x + 12.5 &&
      ((SandYB1 - 20 <= y + 12.5 && SandYC1 + 20 >= y - 12.5) ||
        (y + 12.5 <= SandYC1 + 20 && y + 12.5 >= SandYB1 - 20))
    ) {
      DesertPlayerHealth = DesertPlayerHealth + SandDamage;
    }

    if (
      SandXA2 <= x - 12.5 &&
      SandXB2 >= x + 12.5 &&
      ((SandYC2 <= y + 12.5 && SandYB2 >= y - 12.5) ||
        (y + 12.5 <= SandYB2 && y + 12.5 >= SandYC2))
    ) {
      DesertPlayerHealth = DesertPlayerHealth + SandDamage;
    }

    if (
      SandXA2 >= x - 12.5 &&
      SandXA2 - 20 <= x + 12.5 &&
      ((SandYB2 - 20 <= y + 12.5 && SandYC2 + 20 >= y - 12.5) ||
        (y + 12.5 <= SandYC2 + 20 && y + 12.5 >= SandYB2 - 20))
    ) {
      DesertPlayerHealth = DesertPlayerHealth + SandDamage;
    }

    if (
      SandXA3 <= x - 12.5 &&
      SandXB3 >= x + 12.5 &&
      ((SandYC3 <= y + 12.5 && SandYB3 >= y - 12.5) ||
        (y + 12.5 <= SandYB3 && y + 12.5 >= SandYC3))
    ) {
      DesertPlayerHealth = DesertPlayerHealth + SandDamage;
    }

    if (
      SandXA3 >= x - 12.5 &&
      SandXA3 - 20 <= x + 12.5 &&
      ((SandYB3 - 20 <= y + 12.5 && SandYC3 + 20 >= y - 12.5) ||
        (y + 12.5 <= SandYC3 + 20 && y + 12.5 >= SandYB3 - 20))
    ) {
      DesertPlayerHealth = DesertPlayerHealth + SandDamage;
    }

    if (
      SandXA4 <= x - 12.5 &&
      SandXB4 >= x + 12.5 &&
      ((SandYC4 <= y + 12.5 && SandYB4 >= y - 12.5) ||
        (y + 12.5 <= SandYB4 && y + 12.5 >= SandYC4))
    ) {
      DesertPlayerHealth = DesertPlayerHealth + SandDamage;
    }

    if (
      SandXA5 <= x - 12.5 &&
      SandXB5 >= x + 12.5 &&
      ((SandYC5 <= y + 12.5 && SandYB5 >= y - 12.5) ||
        (y + 12.5 <= SandYB5 && y + 12.5 >= SandYC5))
    ) {
      DesertPlayerHealth = DesertPlayerHealth + SandDamage;
    }

    if (
      SandXA5 >= x - 12.5 &&
      SandXA5 - 20 <= x + 12.5 &&
      ((SandYB5 - 20 <= y + 12.5 && SandYC5 + 20 >= y - 12.5) ||
        (y + 12.5 <= SandYC5 + 20 && y + 12.5 >= SandYB5 - 20))
    ) {
      DesertPlayerHealth = DesertPlayerHealth + SandDamage;
    }

    if (
      SandXA6 <= x - 12.5 &&
      SandXB6 >= x + 12.5 &&
      ((SandYC6 <= y + 12.5 && SandYB6 >= y - 12.5) ||
        (y + 12.5 <= SandYB6 && y + 12.5 >= SandYC6))
    ) {
      DesertPlayerHealth = DesertPlayerHealth + SandDamage;
    }

    if (
      SandXA6 >= x - 12.5 &&
      SandXA6 - 20 <= x + 12.5 &&
      ((SandYB6 - 20 <= y + 12.5 && SandYC6 + 20 >= y - 12.5) ||
        (y + 12.5 <= SandYC6 + 20 && y + 12.5 >= SandYB6 - 20))
    ) {
      DesertPlayerHealth = DesertPlayerHealth + SandDamage;
    }

    if (
      SandXA7 <= x - 12.5 &&
      SandXB7 >= x + 12.5 &&
      ((SandYC7 <= y + 12.5 && SandYB7 >= y - 12.5) ||
        (y + 12.5 <= SandYB7 && y + 12.5 >= SandYC7))
    ) {
      DesertPlayerHealth = DesertPlayerHealth + SandDamage;
    }

    if (
      SandXA7 >= x - 12.5 &&
      SandXA7 - 20 <= x + 12.5 &&
      ((SandYB7 - 20 <= y + 12.5 && SandYC7 + 20 >= y - 12.5) ||
        (y + 12.5 <= SandYC7 + 20 && y + 12.5 >= SandYB7 - 20))
    ) {
      DesertPlayerHealth = DesertPlayerHealth + SandDamage;
    }
    */
    
    //Not Turned
      if (space == true){
    
      if (SandTurned1 == false && 
          x + 12.5 >= SandXA1 && x - 12.5 <= SandXB1 && 
          y + 12.5 >= SandYC1 && y - 12.5 <= SandYB1
         ){
          DesertPlayerHealth += SandDamage;
          }
    
      if (SandTurned2 == false && 
          x + 12.5 >= SandXA2 && x - 12.5 <= SandXB2 && 
          y + 12.5 >= SandYC2 && y - 12.5 <= SandYB2
         ){
          DesertPlayerHealth += SandDamage;
          }
    
      if (SandTurned3 == false && 
          x + 12.5 >= SandXA3 && x - 12.5 <= SandXB3 && 
          y + 12.5 >= SandYC3 && y - 12.5 <= SandYB3
         ){
          DesertPlayerHealth += SandDamage;
          }
    
      if (SandTurned4 == false &&
          x + 12.5 >= SandXA4 && x - 12.5 <= SandXB4 && 
          y + 12.5 >= SandYC4 && y - 12.5 <= SandYB4
         ){
          DesertPlayerHealth += SandDamage;
          }
      
      if (SandTurned5 == false && 
          x + 12.5 >= SandXA5 && x - 12.5 <= SandXB5 && 
          y + 12.5 >= SandYC5 && y - 12.5 <= SandYB5
         ){
          DesertPlayerHealth += SandDamage;
          }
    
      if (SandTurned6 == false && 
          x + 12.5 >= SandXA6 && x - 12.5 <= SandXB6 && 
          y + 12.5 >= SandYC6 && y - 12.5 <= SandYB6
         ){
          DesertPlayerHealth += SandDamage;
          }
    
      if (SandTurned7 == false && 
          x + 12.5 >= SandXA7 && x - 12.5 <= SandXB7 && 
          y + 12.5 >= SandYC7 && y - 12.5 <= SandYB7
         ){
          DesertPlayerHealth += SandDamage;
          }
        
        }     
       
    //Turned
      if (space == true){
        
        if (SandTurned1 == true && 
           x + 12.5 >= SandXB1 && x - 12.5 <= SandXC1 &&
           y + 12.5 >= SandYB1 && y - 12.5 <= SandYA1
           ){
            DesertPlayerHealth += SandDamage;
            }
        
        if (SandTurned2 == true && 
           x + 12.5 >= SandXB2 && x - 12.5 <= SandXC2 &&
           y + 12.5 >= SandYB2 && y - 12.5 <= SandYA2
           ){
            DesertPlayerHealth += SandDamage;
            }
        
        if (SandTurned3 == true && 
           x + 12.5 >= SandXB3 && x - 12.5 <= SandXC3 &&
           y + 12.5 >= SandYB3 && y - 12.5 <= SandYA3
           ){
            DesertPlayerHealth += SandDamage;
            }
        
        if (SandTurned5 == true && 
           x + 12.5 >= SandXB5 && x - 12.5 <= SandXC5 &&
           y + 12.5 >= SandYB5 && y - 12.5 <= SandYA5
           ){
            DesertPlayerHealth += SandDamage;
            }
        
        if (SandTurned6 == true && 
           x + 12.5 >= SandXB6 && x - 12.5 <= SandXC6 &&
           y + 12.5 >= SandYB6 && y - 12.5 <= SandYA6
           ){
            DesertPlayerHealth += SandDamage;
            }
        
        if (SandTurned7 == true && 
           x + 12.5 >= SandXB7 && x - 12.5 <= SandXC7 &&
           y + 12.5 >= SandYB7 && y - 12.5 <= SandYA7
           ){
            DesertPlayerHealth += SandDamage;
        }
        
      }
    
  }

  // Return
  if (space == true) {
    if (SandYA1 >= 2200) {
      SandXA1 = 3500;
      SandYA1 = 50;
      SandXB1 = SandXA1 + 70;
      SandYB1 = SandYA1 + 20;
      SandXC1 = SandXA1 + 70;
      SandYC1 = SandYA1 - 20;
      GunSpeedX1 = 5;
      GunSpeedY1 = 0;
      TurnPlace1 = random(20, 130);
      SandTurned1 = false;
    }

    if (SandYA2 >= 2200) {
      SandXA2 = 3700;
      SandYA2 = 100;
      SandXB2 = SandXA2 + 70;
      SandYB2 = SandYA2 + 20;
      SandXC2 = SandXA2 + 70;
      SandYC2 = SandYA2 - 20;
      GunSpeedX2 = 5;
      GunSpeedY2 = 0;
      TurnPlace2 = random(20, 130);
      SandTurned2 = false;
    }

    if (SandYA3 >= 2200) {
      SandXA3 = 3900;
      SandYA3 = 150;
      SandXB3 = SandXA3 + 70;
      SandYB3 = SandYA3 + 20;
      SandXC3 = SandXA3 + 70;
      SandYC3 = SandYA3 - 20;
      GunSpeedX3 = 5;
      GunSpeedY3 = 0;
      TurnPlace3 = random(20, 130);
      SandTurned3 = false;
    }

    if (SandXA4 <= -1000) {
      SandXA4 = 4100;
      SandYA4 = 200;
      SandXB4 = SandXA4 + 70;
      SandYB4 = SandYA4 + 20;
      SandXC4 = SandXA4 + 70;
      SandYC4 = SandYA4 - 20;
      let GunSpeedX4 = 5;
      let GunSpeedY4 = 0;
      TurnPlace4 = random(20, 130);
    }

    if (SandYA5 <= -1000) {
      SandXA5 = 4300;
      SandYA5 = 250;
      SandXB5 = SandXA5 + 70;
      SandYB5 = SandYA5 + 20;
      SandXC5 = SandXA5 + 70;
      SandYC5 = SandYA5 - 20;
      GunSpeedX5 = 5;
      GunSpeedY5 = 0;
      TurnPlace5 = random(20, 130);
      /*
      SandXA5 = SandXA5 - GunSpeedX5;
      SandXB5 = SandXB5 - GunSpeedX5;
      SandXC5 = SandXC5 - GunSpeedX5;

      SandYA5 = SandYA5 + GunSpeedY5;
      SandYB5 = SandYB5 + GunSpeedY5;
      SandYC5 = SandYC5 + GunSpeedY5;
      */
      SandTurned5 = false;
    }

    if (SandYA6 <= -1000) {
      SandXA6 = 4500;
      SandYA6 = 300;
      SandXB6 = SandXA6 + 70;
      SandYB6 = SandYA6 + 20;
      SandXC6 = SandXA6 + 70;
      SandYC6 = SandYA6 - 20;
      GunSpeedX6 = 5;
      GunSpeedY6 = 0;
      TurnPlace6 = random(20, 130);
      SandTurned6 = false;
      /*
      SandXA6 = SandXA6 - GunSpeedX6;
      SandXB6 = SandXB6 - GunSpeedX6;
      SandXC6 = SandXC6 - GunSpeedX6;

      SandYA6 = SandYA6 + GunSpeedY6;
      SandYB6 = SandYB6 + GunSpeedY6;
      SandYC6 = SandYC6 + GunSpeedY6;
      */
    }

    if (SandYA7 <= -1000) {
      SandXA7 = 4700;
      SandYA7 = 350;
      SandXB7 = SandXA7 + 70;
      SandYB7 = SandYA7 + 20;
      SandXC7 = SandXA7 + 70;
      SandYC7 = SandYA7 - 20;
      GunSpeedX7 = 5;
      GunSpeedY7 = 0;
      TurnPlace7 = random(20, 130);
      SandTurned7 = false;
      /*
      SandXA7 = SandXA7 - GunSpeedX7;
      SandXB7 = SandXB7 - GunSpeedX7;
      SandXC7 = SandXC7 - GunSpeedX7;

      SandYA7 = SandYA7 + GunSpeedY7;
      SandYB7 = SandYB7 + GunSpeedY7;
      SandYC7 = SandYC7 + GunSpeedY7;
      */
    }
  }
}
function DesertPlayerWin() {
  background(DesertCutSceneBackgroundRed, DesertCutSceneBackgroundGreen, 0);
  desertshoot = false;
  Laser = ColorCircle;
  DesertCutSceneBackgroundRed = DesertCutSceneBackgroundRed - 5;
  DesertCutSceneBackgroundGreen = DesertCutSceneBackgroundGreen - 2.74509803922;

  strokeWeight(1);
  noStroke();
  //stroke("black");
  fill(ColorCircle);
  circle(DesertCutx, DesertCuty, 25);

  strokeWeight(DesertBossWeight);
  noStroke();
  //stroke(0);
  fill(DesertBossRed, DesertBossGreen, 0);
  arc(DesertQuadBossX1, DesertQuadBossY1, 100, 100, 0, HALF_PI);
  arc(DesertQuadBossX2, DesertQuadBossY2, 100, 100, HALF_PI, PI);
  arc(DesertQuadBossX3, DesertQuadBossY3, 100, 100, PI, PI + HALF_PI);
  arc(DesertQuadBossX4, DesertQuadBossY4, 100, 100, PI + HALF_PI, 0);
  fill(0, 200, 0);
  arc(CutDesertLeftEyeX, 190, 40, 40, 0 + QUARTER_PI, PI + QUARTER_PI);
  fill("orange");
  arc(CutDesertRightEyeX, 190, 40, 40, 0 - QUARTER_PI, PI - QUARTER_PI);

  fill(Laser);
  rect(DesertLaserX, 100, DesertLaserWidth, 200);

  if (
    DesertCutSceneBackgroundRed <= -50 &&
    DesertCutSceneBackgroundGreen <= -27.4509803922
  ) {
    DesertLaserWidth = DesertLaserWidth + 30;
  }

  DesertTime = DesertTime + 1;

  if (DesertTime >= 200) {
    DesertLaserX = DesertLaserX + 10;
    CutDesertLeftEyeX = -900;
    CutDesertRightEyeX = 900;
  }

  if (DesertLaserX >= 1000) {
    DesertCutx = DesertCutx - 1;
  }

  if (DesertCutx <= -50) {
    DesertBossWeight = 0;
    DesertBossRed = DesertBossRed - 5;
    DesertBossGreen = DesertBossGreen - 1.77777777778;
    DesertQuadBossX1 = DesertQuadBossX1 + 0.1;
    DesertQuadBossX2 = DesertQuadBossX2 - 0.1;
    DesertQuadBossX3 = DesertQuadBossX3 - 0.1;
    DesertQuadBossX4 = DesertQuadBossX4 + 0.1;

    DesertQuadBossY1 = DesertQuadBossY1 + 0.1;
    DesertQuadBossY2 = DesertQuadBossY2 + 0.1;
    DesertQuadBossY3 = DesertQuadBossY3 - 0.1;
    DesertQuadBossY4 = DesertQuadBossY4 - 0.1;
  }

  if (DesertBossRed <= -100 && DesertBossGreen <= -100) {
    DesertBossDie = true;
  }
  if (DesertBossDie == true) {
    DesertBossDie = false;
    screen = 5.6;
    x = 50;
    y = 200;
  }
}
function DesertBossWin() {
  background(DesertCutCutBackRed, DesertCutCutBackGreen, 0);
  desertshoot = false;
  Laser = ColorCircle;
  fill(ColorCircle);
  strokeWeight(DesertPlayerWeight);
  noStroke();
  //stroke(1);
  arc(DesertQuadX1, DesertQuadY1, 25, 25, 0, HALF_PI);
  arc(DesertQuadX2, DesertQuadY2, 25, 25, HALF_PI, PI);
  arc(DesertQuadX3, DesertQuadY3, 25, 25, PI, PI + HALF_PI);
  arc(DesertQuadX4, DesertQuadY4, 25, 25, PI + HALF_PI, 0);

  fill(DesertBossRed, DesertBossGreen, 0);
  strokeWeight(DesertBossWeight);
  circle(DesertCutBossX, DesertCutBossY, DesertBossMass);

  DesertBossMass = DesertBossMass - DesertBossSizeFlunctuation;

  if (DesertBossMass <= 1 && DesertBossSizeChaos == false) {
    DesertBossMass = 20;
    deserttime = deserttime + 1;
  }

  if (deserttime >= 50) {
    DesertBossSizeFlunctuation = 75;
    DesertBossWeight = DesertBossWeight = 0.036;
    DesertBossGreen = DesertBossGreen + 1;
    DesertQuadX1 = DesertQuadX1 + 1;
    DesertQuadX2 = DesertQuadX2 - 1;
    DesertQuadX3 = DesertQuadX3 - 1;
    DesertQuadX4 = DesertQuadX4 + 1;
    DesertQuadY1 = DesertQuadY1 + 1;
    DesertQuadY2 = DesertQuadY2 + 1;
    DesertQuadY3 = DesertQuadY3 - 1;
    DesertQuadY4 = DesertQuadY4 - 1;
    DesertPlayerRed = 225;
    DesertPlayerGreen = DesertPlayerGreen + 50;
    if (DesertPlayerGreen >= 140) {
      DesertPlayerGreen = 140;
    }
    DesertPlayerWeight = 0;

    if (DesertBossGreen >= 140) {
      DesertBossGreen = 140;
      deserttime2 = deserttime2 + 1;
    }

    if (deserttime2 >= 75) {
      DesertBossRed = DesertBossRed - 4;
      DesertBossGreen = DesertBossGreen - 2.74509803921;
    }

    DesertBossSizeChaos = true;
  }

  if (DesertBossRed <= -100 && DesertBossGreen <= -100) {
    DesertPlayerDie = true;
  }

  if (DesertPlayerDie == true) {
    DesertPlayerDie = false;
    screen = 1;
    x = 200;
    y = 200;
    desertfightResult = 0;
    desertgame = true;
    DesertBossHealth = 0;
    DesertPlayerHealth = 200;
    DesertCutBossX = 300;
    DesertCutBossY = 200;
    DesertQuadX1 = 75;
    DesertQuadY1 = 200;
    DesertQuadX2 = 75;
    DesertQuadY2 = 200;
    DesertQuadX3 = 75;
    DesertQuadY3 = 200;
    DesertQuadX4 = 75;
    DesertQuadY4 = 200;
    DesertCutCutBackRed = 225;
    DesertCutCutBackGreen = 140;
    DesertPlayerRed = 255;
    DesertPlayerGreen = 0;
    DesertBossWeight = 1;
    DesertPlayerWeight = 1;
    deserttime = 0;
    deserttime2 = 0;
    DesertBossMass = 100;
    DesertBossGreen = 80;
    DesertBossRed = 225;
    DesertBossSizeChaos = false;
    DesertBossSizeFlunctuation = 5;

    CactusX1 = 700;
    CactusY1 = 200;
    //let CactusX1Speed = 4;
    //let CactusY1Speed = 10;
    CactusX2 = 700;
    CactusY2 = 200;
   // let CactusX2Speed = 4;
   // let CactusY2Speed = 10;
    CactusX3 = 800;
    CactusY3 = 200;
    //let CactusX3Speed = 4;
    //let CactusY3Speed = 10;
    CactusX4 = 800;
    CactusY4 = 200;
    //let CactusX4Speed = 4;
    //let CactusY4Speed = 10;
    CactusX5 = 900;
    CactusY5 = 200;
    //let CactusX5Speed = 4;
   // let CactusY5Speed = 10;
    CactusX6 = 900;
    CactusY6 = 200;
    //let CactusX6Speed = 4;
   // let CactusY6Speed = 10;
    CactusX7 = 1000;
    CactusY7 = 200;
   // let CactusX7Speed = 4;
   // let CactusY7Speed = 10;
    CactusX8 = 1000;
    CactusY8 = 200;
   // let CactusX8Speed = 4;
   // let CactusY8Speed = 10;
    CactusX9 = 1100;
    CactusY9 = 200;
  //  let CactusX9Speed = 4;
    //let CactusY9Speed = 10;
    CactusX10 = 1100;
    CactusY10 = 200;
    //let CactusX10Speed = 4;
   // let CactusY10Speed = 10;

    SandXA1 = 3500;
    SandYA1 = 50;
    SandXB1 = SandXA1 + 70;
    SandYB1 = SandYA1 + 20;
    SandXC1 = SandXA1 + 70;
    SandYC1 = SandYA1 - 20;
    let GunSpeedX1 = 10;
    let GunSpeedY1 = 0;

    SandXA2 = 3700;
    SandYA2 = 100;
    SandXB2 = SandXA2 + 70;
    SandYB2 = SandYA2 + 20;
    SandXC2 = SandXA2 + 70;
    SandYC2 = SandYA2 - 20;
    let GunSpeedX2 = 10;
    let GunSpeedY2 = 0;

    SandXA3 = 3900;
    SandYA3 = 150;
    SandXB3 = SandXA3 + 70;
    SandYB3 = SandYA3 + 20;
    SandXC3 = SandXA3 + 70;
    SandYC3 = SandYA3 - 20;
    let GunSpeedX3 = 10;
    let GunSpeedY3 = 0;

    SandXA4 = 4100;
    SandYA4 = 200;
    SandXB4 = SandXA4 + 70;
    SandYB4 = SandYA4 + 20;
    SandXC4 = SandXA4 + 70;
    SandYC4 = SandYA4 - 20;
    let GunSpeedX4 = 10;
    let GunSpeedY4 = 0;

    SandXA5 = 4300;
    SandYA5 = 250;
    SandXB5 = SandXA5 + 70;
    SandYB5 = SandYA5 + 20;
    SandXC5 = SandXA5 + 70;
    SandYC5 = SandYA5 - 20;
    let GunSpeedX5 = 10;
    let GunSpeedY5 = 0;

    SandXA6 = 4500;
    SandYA6 = 300;
    SandXB6 = SandXA6 + 70;
    SandYB6 = SandYA6 + 20;
    SandXC6 = SandXA6 + 70;
    SandYC6 = SandYA6 - 20;
    let GunSpeedX6 = 10;
    let GunSpeedY6 = 0;

    SandXA7 = 4700;
    SandYA7 = 350;
    SandXB7 = SandXA7 + 70;
    SandYB7 = SandYA7 + 20;
    SandXC7 = SandXA7 + 70;
    SandYC7 = SandYA7 - 20;
    let GunSpeedX7 = 10;
    let GunSpeedY7 = 0;
  }
}
function DesertOrbLocation() {
  background(225, 140, 0);
  fill(225, 80, 0);
  rect(0, 185, 400, 30);

  y = 200;

  if (x + 12.5 >= 400) {
    x = 387.5;
  }

  if (x - 12.5 <= 0 && item4 == false) {
    x = 12.5;
  }
  if (x - 12.5 <= 0 && item4 == true) {
    x = 350;
    screen = 1;
  }
}

function MagicBossBattle() {
  background(50, 0, 50);
  strokeWeight(0);
  fill("purple");
  //top
  rect(MagicBarrierX1, MagicBarrierY1, MagicBarrierW1, MagicBarrierH1);
  //left
  rect(MagicBarrierX2, MagicBarrierY2, MagicBarrierW2, MagicBarrierH2);
  //right
  rect(MagicBarrierX3, MagicBarrierY3, MagicBarrierW3, MagicBarrierH3);
  //down
  rect(MagicBarrierX4, MagicBarrierY4, MagicBarrierW4, MagicBarrierH4);
  //down under
  rect(SpecialBarrierX, SpecialBarrierY, SpecialBarrierW, SpecialBarrierH);

  if (magicgame == true) {
    Player();
    MagicBoss();
    MagicBossBar();
    MagicPlayerBar();
    SlowBeam();
    Invisible();
    Curse();
    Healing();
    Restriction();
    //fill(218,112,214, Cursify);
    //circle(x, y, 25);
  }

  if (magicgame == false && magicfightResult == 1) {
    MagicYouWin();
  }
  if (magicgame == false && magicfightResult == 2) {
    MagicYouLose();
  }

  if (x + 12.5 > MagicBarrierX3 - 10) {
    x = MagicBarrierX3 - 22.5;
  }

  if (x - 12.5 < MagicBarrierX2 + 10) {
    x = MagicBarrierX2 + 22.5;
  }
  if (y - 12.5 < MagicBarrierY1 + 10) {
    y = MagicBarrierY1 + 22.5;
  }
  if (y + 12.5 > MagicBarrierY4 - 10) {
    y = MagicBarrierY4 - 22.5;
  }

  if (magicfightresult == 0 && magicgame == true) {
    if (mouseIsPressed) {
      if (mouseButton === LEFT) magicshoot = true;
      MagicShotY = y + 4;
      MagicShotX = x;
    }
    if (magicshoot == true) {
      MagicShotY = MagicShotY - MagicShotSpeed;
      strokeWeight(0);
      fill(ColorCircle);
      circle(MagicShotX, MagicShotY, 10);
      fill(218, 112, 214, Cursify);
      circle(MagicShotX, MagicShotY, 10);
    }
  }
}
function MagicBoss() {
  if (space == true) {
    //Main Body
    strokeWeight(0);
    fill(MagicBossRed, MagicBossGreen, MagicBossBlue);
    circle(MagicBossX, MagicBossY, 100);
    strokeWeight(0);

    //Mouth
    fill(MagicBossPieceRed, MagicBossPieceGreen, MagicBossPieceBlue);
    ellipse(MagicBossX, MagicBossY + MouthUpY, 75, 50);
    //Mouth Smiler
    fill(MagicBossRed, MagicBossGreen, MagicBossBlue);
    ellipse(MagicBossX, MagicBossY - SmileUpY, 75, 50);

    //Left Eye
    fill(MagicBossPieceRed, MagicBossPieceGreen, MagicBossPieceBlue);
    ellipse(MagicBossX - 20, MagicBossY - 10, 25);

    //Left Eye Eviler
    fill(MagicBossRed, MagicBossGreen, MagicBossBlue);
    ellipse(MagicBossX - 25, MagicBossY - 5, 25);

    //Right Eye
    fill(MagicBossPieceRed, MagicBossPieceGreen, MagicBossPieceBlue);
    ellipse(MagicBossX + 20, MagicBossY - 10, 25);

    //Right Eye Eviler
    fill(MagicBossRed, MagicBossGreen, MagicBossBlue);
    ellipse(MagicBossX + 25, MagicBossY - 5, 25);

    MagicBossX = MagicBossX + MagicBossSpeed;

    if (MagicBossX == 200) {
      MagicBossSpeed = MagicBossSpeed * 1;
    }
    if (MagicBossX >= 350) {
      MagicBossSpeed = MagicBossSpeed * -1;
    }
    if (MagicBossX <= 50) {
      MagicBossSpeed = MagicBossSpeed * -1;
    }

    MouthTime = MouthTime + MouthTimeRise;

    if (MouthTime >= 1) {
      MouthUpY = 5;
      SmileUpY = 5;
      MouthTimeRise = MouthTimeRise * -1;
    }
    if (MouthTime <= 0) {
      MouthUpY = 10;
      SmileUpY = 0;
      MouthTimeRise = MouthTimeRise * -1;
    }
  }
}
function MagicBossBar() {
  strokeWeight(1);
  stroke(0);
  fill("grey");
  rect(0, 0, 400, 20);
  fill(MagicBossHealthBarColor);
  rect(0, 0, MagicBossHealth, 20);
  fill("black");
  textSize(20);

  if (
    MagicShotX + 5 >= MagicBossX - 50 &&
    MagicShotX - 5 <= MagicBossX + 50 &&
    MagicShotY + 5 >= MagicBossY - 50 &&
    MagicShotY - 5 <= MagicBossY + 50
  ) {
    MagicBossHealth = MagicBossHealth - MagicShotDamage;
  }
  if (MagicBossHealth >= 400) {
    MagicBossHealth = 400;
  }
  if (MagicBossHealth > 200) {
    MagicBossHealthBarColor = "green";
  }

  if (MagicBossHealth <= 200 && MagicBossHealth > 50) {
    MagicBossHealthBarColor = "yellow";
  }
  if (MagicBossHealth <= 50) {
    MagicBossHealthBarColor = "red";
  }
  if (MagicBossHealth <= 0) {
    magicfightResult = 1;
    MagicBossHealth = 0;
    magicgame = false;
    Cursed1 = false;
    Cursed2 = false;
    Cursed3 = false;
    Cursed4 = false;
  }
}
function MagicPlayerBar() {
  fill("grey");
  rect(100, 380, 200, 20);
  fill(MagicPlayerHealthBarColor);
  rect(100, 380, MagicPlayerHealth, 20);
  fill(218, 112, 214, Cursify);
  rect(100, 380, MagicPlayerHealth, 20);

  if (MagicPlayerHealth > 100) {
    MagicPlayerHealthBarColor = "green";
  }

  if (MagicPlayerHealth <= 100 && MagicPlayerHealth > 25) {
    MagicPlayerHealthBarColor = "yellow";
  }
  if (MagicPlayerHealth <= 25) {
    MagicPlayerHealthBarColor = "red";
  }
  if (MagicPlayerHealth <= 0) {
    MagicPlayerHealth = 0;
    magicfightResult = 2;
    magicgame = false;
    Cursify = 0;
    Cursed1 = false;
    Cursed2 = false;
    Cursed3 = false;
    Cursed4 = false;
  }
}
function SlowBeam() {
  fill(218, 112, 214, 100);
  rect(SlowBeamX, SlowBeamY, 400, 200);

  SlowCount = SlowCount + SlowCountRise;

  if (Slow == false) {
    SlowBeamY = 420;
    speed = 3;
    MagicShotSpeed = 10;
  }

  if (SlowCount >= 175) {
    MagicBossPieceRed = 255;
  }

  if (SlowCount >= 200) {
    Slow = true;
  }

  if (Slow == true) {
    SlowBeamY = 240;
    speed = 1;
    MagicShotSpeed = 3;
  }

  if (SlowCount >= 1000) {
    Slow = false;
    SlowCount = -1500;
    MagicBossPieceRed = 0;
    MagicBossPieceGreen = 0;
    MagicBossPieceBlue = 0;
  }
}
function Invisible() {
  InvisibleCounter = InvisibleCounter + 0.5;

  if (InvisibleCounter >= 600) {
    Invisibility = true;
  }

  if (Invisibility == true) {
    MagicBossRed = 50;
    MagicBossGreen = 0;
    MagicBossBlue = 50;

    MagicBossPieceRed = 50;
    MagicBossPieceGreen = 0;
    MagicBossPieceBlue = 50;
  }

  if (InvisibleCounter >= 800) {
    Invisibility = false;
    InvisibleCounter = 0;
    MagicBossRed = 218;
    MagicBossGreen = 112;
    MagicBossBlue = 214;
    MagicBossPieceRed = 0;
    MagicBossPieceGreen = 0;
    MagicBossPieceBlue = 0;
  }
}
function Curse() {
  fill(153, 50, 204);
  circle(CurseX1, CurseY1, 40);
  circle(CurseX2, CurseY2, 40);
  circle(CurseX3, CurseY3, 40);
  circle(CurseX4, CurseY4, 40);

  CurseX1 = CurseX1 + CurseSpeed;
  CurseX2 = CurseX2 - CurseSpeed;
  CurseX3 = CurseX3 + CurseSpeed;
  CurseX4 = CurseX4 - CurseSpeed;

  if (
    x + 12.5 >= CurseX1 - 20 &&
    x - 12.5 <= CurseX1 + 20 &&
    y + 12.5 >= CurseY1 - 20 &&
    y - 12.5 <= CurseY1 + 20
  ) {
    Cursed1 = true;
  }

  if (
    x + 12.5 >= CurseX2 - 20 &&
    x - 12.5 <= CurseX2 + 20 &&
    y + 12.5 >= CurseY2 - 20 &&
    y - 12.5 <= CurseY2 + 20
  ) {
    Cursed2 = true;
  }

  if (
    x + 12.5 >= CurseX3 - 20 &&
    x - 12.5 <= CurseX3 + 20 &&
    y + 12.5 >= CurseY3 - 20 &&
    y - 12.5 <= CurseY3 + 20
  ) {
    Cursed3 = true;
  }

  if (
    x + 12.5 >= CurseX4 - 20 &&
    x - 12.5 <= CurseX4 + 20 &&
    y + 12.5 >= CurseY4 - 20 &&
    y - 12.5 <= CurseY4 + 20
  ) {
    Cursed4 = true;
  }

  if (Cursed1 == true) {
    Cursify = 255;
    CurseTime1 = CurseTime1 + 0.1;
    CurseDamage1 = 0.2;
    MagicPlayerHealth = MagicPlayerHealth - CurseDamage1;
    ColorCircle = "orchid";
  }

  if (CurseTime1 >= 20) {
    CurseTime1 = 0;
    Cursed1 = false;
    CurseDamage1 = 0;
    Cursify = 0;
    ColorCircle = "red";
  }

  if (Cursed2 == true) {
    Cursify = 255;
    CurseTime2 = CurseTime2 + 0.1;
    CurseDamage2 = 0.2;
    MagicPlayerHealth = MagicPlayerHealth - CurseDamage2;
    ColorCircle = "orchid";
  }

  if (CurseTime2 >= 20) {
    CurseTime2 = 0;
    Cursed2 = false;
    Cursify = 0;
    CurseDamage2 = 0;
    ColorCircle = "red";
  }

  if (Cursed3 == true) {
    Cursify = 255;
    CurseTime3 = CurseTime3 + 0.1;
    CurseDamage3 = 0.2;
    MagicPlayerHealth = MagicPlayerHealth - CurseDamage3;
    ColorCircle = "orchid";
  }

  if (CurseTime3 >= 20) {
    CurseTime3 = 0;
    Cursed3 = false;
    CurseDamage3 = 0;
    Cursify = 0;
    ColorCircle = "red";
  }

  if (Cursed4 == true) {
    Cursify = 255;
    CurseTime4 = CurseTime4 + 0.1;
    CurseDamage4 = 0.2;
    MagicPlayerHealth = MagicPlayerHealth - CurseDamage4;
    ColorCircle = "orchid";
  }

  if (CurseTime4 >= 20) {
    CurseTime4 = 0;
    Cursed4 = false;
    Cursify = 0;
    CurseDamage4 = 0;
    ColorCircle = "red";
  }

  if (CurseX1 >= 1000) {
    CurseX1 = -600;
  }

  if (CurseX2 <= -600) {
    CurseX2 = 1000;
  }

  if (CurseX3 >= 1000) {
    CurseX3 = -600;
  }

  if (CurseX4 <= -600) {
    CurseX4 = 1000;
  }
}
function Healing() {
  HealTimer = HealTimer + 0.5;

  if (HealTimer >= 1000) {
    Heal = true;
  }

  if (HealTimer >= 875) {
    MagicBossPieceRed = 0;
    MagicBossPieceGreen = 0;
    MagicBossPieceBlue = 255;
  }

  if (Heal == true) {
    MagicShotDamage = -3;
  }

  if (HealTimer >= 1200) {
    HealTimee = 0;
    Heal = false;
    MagicShotDamage = 1;
    MagicBossPieceRed = 0;
    MagicBossPieceGreen = 0;
    MagicBossPieceBlue = 0;
  }

  if (Heal == false && Invisibility == false && MagicBossPieceBlue != 0) {
    MagicBossPieceBlue = 0;
  }
}
function Restriction() {
  RestrictTimer = RestrictTimer + 0.5;

  if (RestrictTimer >= 1400) {
    if (!Invisibility) {
      MagicBossPieceRed = 255;
      MagicBossPieceGreen = 255;
      MagicBossPieceBlue = 0;
    }
    if (Invisibility) {
      MagicBossPieceRed = 50;
      MagicBossPieceGreen = 0;
      MagicBossPieceBlue = 50;
    }
  }

  if (RestrictTimer >= 1500) {
    Restrict = true;
  }

  if (Restrict == true) {
    MagicBarrierX2 = MagicBarrierX2 + BarrierTransformRate;
    MagicBarrierX3 = MagicBarrierX3 - BarrierTransformRate;

    if (
      MagicBarrierX2 >= 137.5 &&
      MagicBarrierX3 <= 252.5 &&
      BarrierTurn == false &&
      BarrierTimer <= BarrierTimerEnd
    ) {
      MagicBarrierX2 = 137.5;
      MagicBarrierX3 = 252.5;
      BarrierTimer = BarrierTimer + 0.5;
    }

    if (BarrierTimer > BarrierTimerEnd) {
      BarrierTimer = BarrierTimerEnd;
      BarrierTurn = true;
      BarrierTransformRate = BarrierTransformRate * -1;
    }

    if (
      BarrierTurn == true &&
      BarrierTimer == BarrierTimerEnd &&
      MagicBarrierX2 <= -10 &&
      MagicBarrierX3 >= 400
    ) {
      MagicBarrierX2 = -10;
      MagicBarrierX3 = 400;
      BarrierTimer = 0;
      BarrierTurn = false;
      BarrierTransformRate = 0;
    }

    //MagicBarrierX2 = 137.5;
    //MagicBarrierX3 = 252.5
  }

  if (RestrictTimer >= 2000) {
    Restrict = false;
    RestrictTimer = 0;
    MagicBossPieceRed = 0;
    MagicBossPieceGreen = 0;
    MagicBossPieceBlue = 0;
  }
}
function MagicYouWin() {
  background(MagicBackgroundCut, 0, MagicBackgroundCut);
  MagicBackgroundCut = MagicBackgroundCut - 1;

  if (cutmagicspace == true) {
    fill("red");
    circle(MagicCutX, MagicCutY, 25);

    strokeWeight(0);
    fill(CutMagicRed, CutMagicGreen, CutMagicBlue);
    circle(MagicBossCutX, MagicBossCutY, 100);
    strokeWeight(0);

    //Mouth
    fill(CutMagicPieceRed, CutMagicPieceGreen, CutMagicPieceBlue);
    ellipse(MagicBossCutX, MagicBossCutY + CutMouthUpY, 75, 50);
    //Mouth Smiler
    fill(CutMagicRed, CutMagicGreen, CutMagicBlue);
    ellipse(MagicBossCutX, MagicBossCutY - CutSmileUpY, 75, 50);

    //Left Eye
    fill(CutMagicPieceRed, CutMagicPieceGreen, CutMagicPieceBlue);
    ellipse(MagicBossCutX - 20, MagicBossCutY - 10, 25);

    //Left Eye Eviler
    fill(CutMagicRed, CutMagicGreen, CutMagicBlue);
    ellipse(MagicBossCutX - 25, MagicBossCutY - 5, 25);

    //Right Eye
    fill(CutMagicPieceRed, CutMagicPieceGreen, CutMagicPieceBlue);
    ellipse(MagicBossCutX + 20, MagicBossCutY - 10, 25);

    //Right Eye Eviler
    fill(CutMagicRed, CutMagicGreen, CutMagicBlue);
    ellipse(MagicBossCutX + 25, MagicBossCutY - 5, 25);

    //CutMouthTime = CutMouthTime + CutMouthTimeRise;
    if (CutMouthTime >= 1) {
      CutMouthUpY = 5;
      CutSmileUpY = 5;
      CutMouthTimeRise = CutMouthTimeRise * -1;
    }
    if (CutMouthTime <= 0) {
      CutMouthUpY = 10;
      CutSmileUpY = 0;
      CutMouthTimeRise = CutMouthTimeRise * -1;
    }
  }

  if (MagicBackgroundCut <= -50) {
    MagicCutY = MagicCutY + 1;
  }

  fill(0, 0, 0, CutShading);
  rect(150, 50, 100, 100);

  if (MagicCutY >= 450) {
    //CutMouthTime = CutMouthTime + CutMouthTimeRise;
    CutMagicRed = CutMagicRed - 10;
    CutMagicGreen = CutMagicGreen - 10;
    CutMagicBlue = CutMagicBlue - 10;

    CutMagicPieceRed = 255;

    SpeechTiming = SpeechTiming + 0.5;
  }

  if (SpeechTiming > 25) {
    CutMouthTime = CutMouthTime + CutMouthTimeRise;
    fill(MagicSpeechColorRed, MagicSpeechColorGreen, 0);
    textSize(MagicSpeechSize);
    textStyle(MagicSpeechStyle);
    text(MagicSpeech, 5, 170, 400, 400);
  }

  if (SpeechTiming > 100) {
    MagicSpeech =
      "At last thee who shaved the skin of the sun has met my eye...";
  }

  if (SpeechTiming > 300) {
    MagicSpeech = "But thee shall not ease...";
  }

  if (SpeechTiming > 400) {
    MagicSpeech =
      "For the shell of a hermit crab is not what eats the algae...";
  }

  if (SpeechTiming > 500) {
    MagicSpeech = "The Dark One whom was vanquished by thou..";
  }

  if (SpeechTiming > 600) {
    MagicSpeechSize = 60;
    MagicSpeech = "is but a mere shadow...";
  }

  if (SpeechTiming > 700) {
    MagicSpeech = "of the Greater One...";
  }

  if (SpeechTiming > 800) {
    //textStyle(BOLD)
    MagicSpeechStyle = BOLD;
    MagicSpeechSize = 72;
    MagicSpeechColorGreen = 255;
    MagicSpeech = "THE LIGHT ONE...";
  }

  if (SpeechTiming > 900) {
    //textStyle(NORMAL)
    MagicSpeechSize = 50;
    MagicSpeechStyle = NORMAL;
    MagicSpeechColorGreen = 0;
    MagicSpeech = "Farewell Cardinal...";
  }

  if (SpeechTiming > 1000) {
    MagicSpeechSize = 40;
    MagicSpeech = "For your fate has chosen a path of no return for you...";
  }

  if (SpeechTiming > 1200) {
    MagicSpeechSize = 71;
    CutShading = CutShading + 5;
    MagicSpeech = "huhuhuhuhuhuhuhuhuhuhu....";
  }

  if (SpeechTiming > 1300) {
    MagicSpeechColorRed = MagicSpeechColorRed - 10;
  }

  if (MagicSpeechColorRed <= -700) {
    screen = -3.5;
  }
}
function MagicYouLose() {
  background(MagicBackgroundCutCut, 0, MagicBackgroundCutCut);
  MagicBackgroundCutCut = MagicBackgroundCutCut - 1;

  CurseX1 = -600;
  CurseY1 = 260;
  CurseX2 = 1000;
  CurseY2 = 300;
  CurseX3 = -600;
  CurseY3 = 340;
  CurseX4 = 1000;
  CurseY4 = 380;
  CurseSpeed = 0;
  Cursed1 = false;
  Cursed2 = false;
  Cursed3 = false;
  Cursed4 = false;

  fill(MagicCutCutColor);
  noStroke();
  arc(MagicQuadX1, MagicQuadY1, 25, 25, 0, HALF_PI);
  arc(MagicQuadX2, MagicQuadY2, 25, 25, HALF_PI, PI);
  arc(MagicQuadX3, MagicQuadY3, 25, 25, PI, PI + HALF_PI);
  arc(MagicQuadX4, MagicQuadY4, 25, 25, PI + HALF_PI, 0);

  if (MagicCutSpace == true) {
    strokeWeight(0);
    fill(CutCutMagicRed, CutCutMagicGreen, CutCutMagicBlue);
    circle(MagicBossCutCutX, MagicBossCutCutY, 100);
    strokeWeight(0);

    //Mouth
    fill(CutCutMagicPieceRed, CutCutMagicPieceGreen, CutCutMagicPieceBlue);
    ellipse(MagicBossCutCutX, MagicBossCutCutY + CutCutMouthUpY, 75, 50);
    //Mouth Smiler
    fill(CutCutMagicRed, CutCutMagicGreen, CutCutMagicBlue);
    ellipse(MagicBossCutCutX, MagicBossCutCutY - CutCutSmileUpY, 75, 50);

    //Left Eye
    fill(CutCutMagicPieceRed, CutCutMagicPieceGreen, CutCutMagicPieceBlue);
    ellipse(MagicBossCutCutX - 20, MagicBossCutCutY - 10, 25);

    //Left Eye Eviler
    fill(CutCutMagicRed, CutCutMagicGreen, CutCutMagicBlue);
    ellipse(MagicBossCutCutX - 25, MagicBossCutCutY - 5, 25);

    //Right Eye
    fill(CutCutMagicPieceRed, CutCutMagicPieceGreen, CutCutMagicPieceBlue);
    ellipse(MagicBossCutCutX + 20, MagicBossCutCutY - 10, 25);

    //Right Eye Eviler
    fill(CutCutMagicRed, CutCutMagicGreen, CutCutMagicBlue);
    ellipse(MagicBossCutCutX + 25, MagicBossCutCutY - 5, 25);

    //CutCutMouthTime = CutCutMouthTime + CutCutMouthTimeRise;
    if (CutCutMouthTime >= 1) {
      CutCutMouthUpY = 5;
      CutCutSmileUpY = 5;
      CutCutMouthTimeRise = CutCutMouthTimeRise * -1;
    }
    if (CutCutMouthTime <= 0) {
      CutCutMouthUpY = 10;
      CutCutSmileUpY = 0;
      CutCutMouthTimeRise = CutCutMouthTimeRise * -1;
    }
  }

  fill("orchid");
  textSize(40);
  //text(magiclasertime, 10, 200);
  magiclasertime = magiclasertime + 1;

  MagicLaserOpaque = MagicLaserOpaque + MagicLaserOpaqueRiser;
  fill(218, 112, 214, MagicLaserOpaque);
  quad(
    MagicLaserX1,
    MagicLaserY1,
    MagicLaserX2,
    MagicLaserY2,
    MagicLaserX3,
    MagicLaserY3,
    MagicLaserX4,
    MagicLaserY4
  );

  if (MagicBackgroundCutCut <= -50) {
    CutCutMouthTime = CutCutMouthTime + CutCutMouthTimeRise;
    CutCutMouthTimeRise = CutCutMouthTimeRise + 0.01;
    if (CutCutMouthTimeRise >= 0.9) {
      CutCutMouthTimeRise = 0.9;
    }
    MagicLaserY3 = MagicLaserY3 + 12;
    MagicLaserY4 = MagicLaserY4 + 12;

    if (MagicLaserY3 >= 500 && MagicLaserY4 >= 500) {
      MagicLaserX1 = MagicLaserX1 - 1;
      MagicLaserX2 = MagicLaserX2 + 1;
      MagicLaserX3 = MagicLaserX3 + 1;
      MagicLaserX4 = MagicLaserX4 - 1;
    }

    if (MagicLaserX1 <= 130) {
      MagicLaserX1 = 130;
    }
    if (MagicLaserX4 <= 130) {
      MagicLaserX4 = 130;
    }
    if (MagicLaserX2 >= 270) {
      MagicLaserX2 = 270;
    }
    if (MagicLaserX3 >= 270) {
      MagicLaserX3 = 270;
    }
  }

  if (MagicLaserOpaque >= 300) {
    MagicLaserOpaqueRiser = -5;
    MagicCutCutColor = "orchid";
    //magiclasertime = magiclasertime + 1;
  }

  if (
    MagicLaserOpaque <= -100 &&
    magiclasertime >= 450 &&
    magiclasertime < 500
  ) {
    CutCutMagicRed = CutCutMagicRed - 5;
    CutCutMagicGreen = CutCutMagicGreen - 5;
    CutCutMagicBlue = CutCutMagicBlue - 5;
    CutCutMagicPieceRed = CutCutMagicPieceRed + 10;
  }

  if (magiclasertime >= 550) {
    CutCutMagicPieceRed = CutCutMagicPieceRed - 10;
  }

  if (magiclasertime >= 650) {
    MagicQuadX1 = MagicQuadX1 + 0.1;
    MagicQuadX2 = MagicQuadX2 - 0.1;
    MagicQuadX3 = MagicQuadX3 - 0.1;
    MagicQuadX4 = MagicQuadX4 + 0.1;

    MagicQuadY1 = MagicQuadY1 + 0.1;
    MagicQuadY2 = MagicQuadY2 + 0.1;
    MagicQuadY3 = MagicQuadY3 - 0.1;
    MagicQuadY4 = MagicQuadY4 - 0.1;
  }

  if (magiclasertime >= 700) {
    screen = 7.5;
    x = 200;
    magicfightResult = 0;
    magicgame = true;
    MagicPlayerHealth = 200;
    MagicBossHealth = 400;
    MagicBackgroundCutCut = 50;
    MagicCutCutColor = "red";
    MagicQuadX1 = 200;
    MagicQuadY1 = 325;
    MagicQuadX2 = 200;
    MagicQuadY2 = 325;
    MagicQuadX3 = 200;
    MagicQuadY3 = 325;
    MagicQuadX4 = 200;
    MagicQuadY4 = 325;

    MagicBossCutCutX = 200;
    MagicBossCutCutY = 100;
    CutCutMagicRed = 218;
    CutCutMagicGreen = 112;
    CutCutMagicBlue = 214;
    CutCutMagicPieceRed = 0;
    CutCutMagicPieceGreen = 0;
    CutCutMagicPieceBlue = 0;
    CutCutMouthUpY = 10;
    CutCutSmileUpY = 0;
    CutCutMouthTime = 0;
    CutCutMouthTimeRise = 0.1;

    MagicLaserX1 = 185;
    MagicLaserY1 = 155;

    MagicLaserX2 = 215;
    MagicLaserY2 = 155;

    MagicLaserX3 = 215;
    MagicLaserY3 = 155;

    MagicLaserX4 = 185;
    MagicLaserY4 = 155;

    MagicLaserRed = 218;
    MagicLaserGreen = 112;
    MagicLaserBlue = 214;

    MagicLaserOpaque = -50;
    MagicLaserOpaqueRiser = 1;

    magiclasertime = 0;

    SlowBeamX = 0;
    SlowBeamY = 420;
    let Slow = false;
    SlowCount = 0;
    SlowCountRise = 1;
    let Invisibility = false;
    InvisibleCounter = 0;

    MagicBossRed = 218;
    MagicBossGreen = 112;
    MagicBossBlue = 214;

    MagicBossPieceRed = 0;
    MagicBossPieceGreen = 0;
    MagicBossPieceBlue = 0;

    magictime = 0;

    let Cursed1 = false;
    let Cursed2 = false;
    let Cursed3 = false;
    let Cursed4 = false;
    Cursify = 0;
    CurseTime1 = 0;
    CurseTime2 = 0;
    CurseTime3 = 0;
    CurseTime4 = 0;
    CurseDamage1 = 0;
    CurseDamage2 = 0;
    CurseDamage3 = 0;
    CurseDamage4 = 0;
    ColorCircle = "red";

    //Size 40
    CurseX1 = -600;
    CurseY1 = 260;
    CurseX2 = 1000;
    CurseY2 = 300;
    CurseX3 = -600;
    CurseY3 = 340;
    CurseX4 = 1000;
    CurseY4 = 380;
    CurseSpeed = 3;

    let Heal = false;
    HealTimer = 0;
    MagicShotRecoil = 1;

    let Restrict = false;
    RestrictTimer = 0;
    BarrierTimer = 0;
    BarrierTurn = false;
    BarrierTimerEnd = 400;
  }
}
