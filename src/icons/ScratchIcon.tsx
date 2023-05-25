import React, { FC } from 'react';

interface IconsProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

export const ScratchIcon: FC<IconsProps> = ({ width = '100%', height = 'auto', color }) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 1683.000000 240.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <g
      transform="translate(0.000000,240.000000) scale(0.100000,-0.100000)"
      fill={color}
      stroke="none"
    >
      <path
        d="M7747 1753 c-8 -7 -528 -14 -782 -9 -155 3 -218 -2 -209 -15 8 -13
-13 -11 -36 3 -15 9 -22 10 -31 1 -8 -8 -18 -9 -36 0 -18 8 -29 8 -44 -1 -23
-15 -32 -15 -24 -2 3 6 -1 10 -10 10 -10 0 -13 -5 -9 -12 5 -7 3 -8 -7 -3 -23
15 -82 17 -91 3 -6 -11 -10 -11 -16 0 -7 10 -11 10 -22 -2 -10 -13 -9 -17 11
-25 22 -9 21 -9 -9 -8 -29 2 -32 5 -28 27 3 14 3 19 0 12 -3 -6 -11 -9 -17 -5
-19 11 -56 12 -63 1 -4 -7 -9 -7 -13 1 -5 7 -15 6 -34 -4 -25 -13 -31 -11 -28
8 2 14 -17 7 -23 -9 -4 -9 -9 -14 -13 -11 -3 4 -19 -7 -35 -23 -25 -27 -78
-42 -78 -22 1 17 18 34 24 23 10 -16 36 -13 36 4 0 9 7 18 15 21 22 9 18 23
-5 17 -11 -3 -20 -10 -20 -15 0 -14 -34 -5 -42 12 -6 13 -7 12 -7 -2 -1 -11
-7 -15 -21 -11 -11 3 -26 0 -34 -6 -21 -17 -7 -50 23 -57 14 -3 35 -9 46 -12
30 -9 65 -9 65 0 0 4 8 8 18 8 16 1 16 1 0 11 -10 5 -18 15 -18 20 0 6 7 3 16
-5 21 -21 31 -20 44 4 6 12 16 18 23 13 8 -5 8 -8 -1 -11 -7 -2 -12 -8 -12
-14 0 -6 7 -8 14 -5 10 4 13 1 10 -7 -3 -7 -14 -12 -26 -12 -11 1 -23 -4 -25
-11 -3 -7 3 -9 18 -6 13 4 20 2 16 -4 -3 -5 0 -10 8 -10 8 0 15 6 15 13 0 6 9
14 19 17 14 3 19 0 18 -13 -1 -11 -7 -16 -17 -12 -12 4 -11 1 3 -14 12 -13 20
-15 25 -8 4 6 21 13 39 16 18 2 30 1 27 -4 -3 -4 4 -8 15 -8 25 0 38 20 20 31
-15 9 -11 11 21 11 33 0 35 -1 15 -16 -18 -13 -18 -14 3 -20 12 -4 30 -2 41 3
14 8 22 8 26 0 4 -5 12 -8 18 -6 7 2 22 0 35 -4 14 -6 22 -5 22 2 0 8 5 7 15
-1 12 -10 21 -10 40 -2 15 7 25 8 25 2 0 -6 48 -10 120 -10 89 0 120 3 120 13
0 8 2 9 8 1 9 -15 332 -16 332 -1 0 6 5 6 13 1 6 -5 48 -8 92 -7 44 2 91 3
105 2 32 0 55 0 168 2 50 0 95 5 98 10 3 5 10 9 15 9 6 0 8 -4 4 -9 -9 -15
728 -13 737 2 6 9 10 8 17 -2 6 -9 15 -11 27 -6 11 5 24 7 29 6 6 -2 54 -4
107 -4 73 -2 99 1 103 11 3 7 9 10 15 7 6 -4 8 -10 5 -15 -9 -14 76 -4 87 11
8 11 9 11 4 -3 -4 -13 0 -18 14 -18 11 0 20 4 20 9 0 5 11 16 23 24 23 15 24
15 19 -9 -3 -16 0 -24 9 -25 8 -1 91 -2 184 -4 123 -2 177 1 197 10 22 10 26
10 22 0 -4 -10 45 -13 243 -15 136 -1 304 -3 373 -4 69 -2 337 -6 595 -9 1118
-16 1626 -25 1785 -32 178 -7 625 -19 680 -18 80 2 82 2 75 13 -3 6 -1 10 4
10 6 0 11 -6 11 -14 0 -9 17 -14 60 -15 36 -1 60 3 60 9 0 5 -8 10 -17 11 -10
1 0 5 22 10 38 9 143 7 161 -3 5 -3 24 -4 42 -2 29 2 37 -4 33 -28 0 -5 6 -8
14 -8 8 0 15 7 15 15 0 20 30 19 47 -2 8 -10 12 -12 8 -5 -10 19 23 14 34 -5
10 -17 10 -17 11 0 0 23 21 22 49 -4 16 -15 25 -18 35 -10 7 6 16 8 19 5 3 -4
23 -8 43 -9 32 -2 35 0 20 10 -9 7 -13 16 -8 19 5 3 19 -6 30 -19 12 -14 30
-25 39 -25 10 0 167 -9 348 -20 182 -11 382 -22 445 -25 63 -4 142 -8 175 -11
33 -2 112 -7 175 -10 224 -11 390 -21 450 -29 19 -2 74 -9 123 -15 48 -6 102
-10 120 -10 17 0 59 -4 92 -10 72 -14 179 -13 183 0 2 6 13 10 25 10 18 0 19
-2 7 -10 -8 -5 -10 -10 -4 -10 6 0 17 7 24 15 9 11 17 12 30 5 29 -16 80 -12
80 5 0 9 -9 15 -21 15 -14 0 -19 5 -17 18 2 9 -5 25 -16 35 -19 17 -103 46
-149 51 -12 1 -27 5 -33 8 -12 8 -121 27 -184 32 -25 2 -79 9 -120 15 -64 9
-515 49 -750 66 -41 3 -136 9 -210 15 -226 17 -636 41 -790 46 -80 3 -165 7
-190 9 -25 2 -88 7 -140 10 -52 3 -124 8 -160 10 -76 6 -561 24 -770 30 -570
16 -4831 41 -4843 28z m-1232 -33 c3 -5 -3 -10 -15 -10 -12 0 -18 5 -15 10 3
6 10 10 15 10 5 0 12 -4 15 -10z m-201 -19 c3 -5 -1 -11 -9 -15 -9 -3 -15 0
-15 9 0 16 16 20 24 6z m276 -15 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6
5 11 10 11 6 0 10 -2 10 -4z m1630 -61 c0 -8 -4 -15 -10 -15 -5 0 -7 7 -4 15
4 8 8 15 10 15 2 0 4 -7 4 -15z m-1180 1 c0 -2 -7 -7 -16 -10 -8 -3 -12 -2 -9
4 6 10 25 14 25 6z m1247 -12 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2
13 -5z m5253 -32 c0 -15 -2 -15 -10 -2 -13 20 -13 33 0 25 6 -3 10 -14 10 -23z
m1815 -162 c3 -5 2 -10 -4 -10 -5 0 -13 5 -16 10 -3 6 -2 10 4 10 5 0 13 -4
16 -10z"
      />
      <path
        d="M4355 1729 c-225 -4 -491 -10 -590 -13 -99 -3 -355 -5 -568 -5 -312
-1 -387 -3 -381 -13 6 -10 5 -10 -7 -1 -11 9 -127 10 -489 5 -627 -9 -1273 -7
-1490 6 -192 11 -230 8 -230 -17 0 -13 -2 -14 -9 -2 -7 12 -13 12 -24 3 -7 -7
-16 -10 -19 -7 -8 9 -28 -20 -38 -55 l-9 -33 54 7 c30 3 55 2 55 -2 0 -5 28
-12 62 -16 70 -7 71 -7 62 -30 -10 -26 -53 -43 -129 -51 -78 -8 -95 -17 -95
-50 0 -30 14 -40 80 -56 67 -16 113 -37 105 -49 -3 -5 -1 -11 4 -14 5 -3 7
-15 4 -26 -4 -13 0 -20 10 -20 21 0 108 -50 102 -60 -3 -4 9 -14 26 -22 26
-13 28 -16 12 -22 -9 -4 -19 -3 -21 2 -4 12 -42 3 -42 -9 0 -5 6 -9 14 -9 8 0
16 -6 19 -14 11 -27 111 -38 402 -42 160 -3 326 -6 370 -8 191 -9 293 -8 314
4 15 8 26 8 34 1 10 -8 52 -9 52 -1 0 8 53 5 63 -3 10 -8 16 -7 21 2 6 10 10
9 14 -2 5 -13 36 -16 193 -16 164 -1 190 2 208 17 15 12 17 13 9 1 -11 -13 -2
-15 75 -14 48 1 95 -3 105 -7 11 -6 17 -5 17 3 0 7 6 8 18 3 25 -11 166 -11
174 1 4 5 16 4 32 -4 16 -9 34 -11 53 -5 15 4 37 6 48 5 11 -2 97 -5 190 -7
262 -4 781 -16 870 -19 44 -1 295 -6 557 -10 378 -6 481 -5 493 5 11 9 15 9
15 1 0 -7 8 -10 18 -7 9 3 33 2 53 -3 21 -5 43 -4 53 1 11 6 21 6 29 0 17 -14
167 -12 167 2 0 7 3 7 8 1 4 -5 15 -11 24 -13 13 -2 16 2 11 14 -5 14 -3 16
11 11 10 -4 20 -7 22 -7 3 0 2 -5 -1 -10 -4 -7 8 -10 34 -9 22 2 38 6 35 10
-2 4 9 7 26 7 16 -1 30 -5 30 -9 0 -7 166 -12 483 -13 128 -1 167 2 167 11 0
18 19 16 26 -2 4 -8 10 -12 15 -9 5 3 7 11 3 17 -3 7 1 4 9 -5 16 -20 91 -25
102 -8 4 6 27 8 55 5 29 -3 51 -1 55 5 3 5 -1 10 -10 10 -9 0 -14 4 -11 9 7
11 55 -10 53 -23 -2 -10 29 -11 115 -5 39 3 44 6 35 19 -6 8 0 5 14 -8 29 -25
68 -23 101 5 15 13 16 13 11 -5 -4 -17 1 -19 47 -21 31 0 49 3 45 9 -3 6 1 10
9 10 9 0 16 -4 16 -10 0 -5 9 -10 20 -10 11 0 20 4 20 9 0 5 12 7 28 5 15 -3
85 -7 156 -9 71 -3 132 -7 134 -10 3 -3 12 1 20 8 10 7 17 8 19 2 2 -6 30 -9
66 -7 34 1 69 2 77 2 8 0 25 -1 37 -1 12 -1 36 6 54 15 42 21 46 20 18 -4
l-24 -20 63 2 c34 1 62 6 62 12 0 5 7 1 15 -10 8 -10 15 -13 15 -7 0 9 10 11
32 6 22 -4 29 -3 24 5 -5 8 -2 10 8 6 9 -3 13 -11 10 -16 -5 -7 -1 -7 10 -1 9
5 40 6 69 2 42 -5 57 -3 78 12 26 18 27 18 32 -1 5 -19 14 -20 152 -20 82 0
155 5 166 10 12 7 19 7 19 1 0 -6 20 -9 45 -7 25 1 45 -1 45 -6 0 -4 7 -8 16
-8 8 0 13 4 9 10 -4 6 4 6 22 0 15 -6 108 -9 206 -8 97 2 177 0 177 -3 0 -4
91 -7 203 -7 111 -1 274 -4 362 -6 88 -3 309 -8 490 -11 687 -12 1446 -35
2280 -71 72 -3 201 -7 287 -9 86 -2 161 -5 166 -9 5 -3 102 -8 217 -11 114 -3
232 -8 261 -11 42 -5 54 -4 54 7 0 11 2 11 8 2 11 -17 94 -23 877 -58 297 -13
605 -27 685 -30 80 -3 188 -8 240 -10 296 -16 853 -35 966 -34 l132 1 -2 24
c-1 18 -7 24 -26 25 -14 1 -38 3 -55 5 -52 6 -354 22 -525 29 -91 3 -190 8
-220 10 -30 2 -104 6 -165 9 -60 3 -252 12 -425 21 -1511 74 -1380 69 -1380
53 0 -9 -3 -10 -8 -2 -4 7 -18 12 -32 13 -14 1 -38 2 -55 4 -16 1 -46 -1 -65
-5 -19 -4 -39 -3 -45 2 -6 5 -20 9 -30 10 -95 2 -221 10 -245 15 -19 4 -36 2
-45 -5 -12 -10 -15 -10 -15 0 0 9 -14 11 -55 7 -31 -3 -67 -1 -84 6 -25 9 -37
8 -68 -6 -31 -14 -34 -14 -18 -2 19 15 16 16 -45 15 -36 0 -80 2 -98 6 -20 4
-38 2 -48 -7 -9 -7 -18 -9 -22 -3 -9 12 -10 12 -158 19 -71 3 -163 8 -204 10
-281 17 -1567 55 -1820 54 -194 0 -189 0 -245 5 -22 2 -177 7 -345 10 -168 4
-392 9 -499 11 -106 3 -199 2 -205 -2 -17 -11 -37 -12 -30 -2 3 5 -2 9 -10 9
-9 0 -16 -6 -16 -12 0 -9 -3 -9 -9 1 -8 12 -14 13 -35 3 -14 -6 -26 -8 -26 -3
0 11 -48 12 -218 8 -35 -1 -66 1 -68 5 -6 9 -29 4 -45 -9 -16 -13 -89 -13 -89
0 0 4 -9 5 -20 2 -12 -4 -20 -2 -20 5 0 8 -7 9 -17 5 -28 -11 -63 -13 -57 -4
7 12 -29 12 -41 0 -6 -5 -21 -12 -35 -16 -24 -7 -24 -7 -5 9 20 15 20 15 -2
16 -12 0 -25 -5 -29 -11 -4 -8 -9 -8 -13 -1 -8 13 -105 17 -143 7 -17 -4 -28
-3 -28 3 0 10 -114 7 -131 -3 -5 -3 -18 -1 -30 6 -17 9 -23 8 -30 -2 -7 -12
-12 -12 -30 -1 -23 15 -70 8 -107 -16 -20 -13 -22 -13 -17 0 9 22 -13 25 -180
22 -172 -4 -186 -5 -178 -17 3 -5 0 -7 -8 -5 -8 3 -13 10 -12 16 2 6 -10 10
-25 8 -15 -1 -42 1 -59 5 -19 4 -30 3 -27 -2 3 -5 0 -9 -5 -9 -6 0 -11 5 -11
11 0 5 -5 7 -11 3 -15 -9 -91 -14 -104 -6 -20 12 -64 10 -76 -4 -9 -11 -14
-12 -20 -3 -5 9 -15 9 -38 1 -17 -6 -31 -7 -31 -2 0 4 -9 6 -20 3 -11 -3 -28
-2 -37 2 -28 12 -124 16 -137 6 -6 -5 -24 -7 -41 -5 -16 2 -33 -2 -37 -9 -6
-9 -10 -9 -15 -1 -5 6 -37 14 -73 18 -36 4 -81 9 -101 12 -27 5 -38 2 -42 -10
-4 -9 -11 -16 -17 -16 -6 0 -8 6 -4 13 5 9 4 9 -6 0 -11 -10 -16 -9 -26 5 -11
14 -16 15 -33 4 -18 -10 -21 -10 -21 4 0 12 -3 14 -13 6 -14 -12 -91 -11 -103
1 -11 11 -36 9 -29 -3 3 -5 2 -10 -4 -10 -5 0 -12 4 -15 9 -3 4 -27 9 -53 10
-27 1 -71 3 -99 5 -39 2 -51 -1 -47 -10 5 -13 -24 -13 -59 0 -37 13 -46 14
-53 8 -9 -9 -65 -10 -65 -2 0 4 -6 7 -14 7 -8 0 -12 -6 -9 -14 3 -9 -3 -13
-21 -13 -17 0 -26 5 -26 15 0 12 -4 14 -19 5 -13 -7 -22 -7 -26 0 -3 5 -11 10
-16 10 -6 0 -7 -4 -4 -10 3 -5 -1 -10 -9 -10 -9 0 -16 6 -16 13 0 8 -4 7 -10
-3 -5 -8 -10 -11 -10 -5 0 5 -5 4 -11 -2 -9 -9 -21 -8 -50 4 -21 8 -44 13 -51
10 -8 -3 -6 -6 5 -6 10 -1 16 -5 12 -11 -6 -10 -36 -2 -47 14 -5 7 -11 8 -15
1 -10 -12 -36 -13 -44 -1 -4 4 -30 9 -58 11 -40 2 -51 0 -47 -11 3 -8 0 -11
-9 -7 -8 3 -13 8 -10 12 2 4 -41 9 -96 10 -87 2 -103 0 -116 -16 -13 -16 -14
-17 -9 0 4 13 0 17 -19 17 -14 0 -25 4 -25 8 0 5 21 7 48 7 26 -1 50 3 54 9 5
8 11 7 20 -2 15 -15 98 -16 98 -2 0 7 6 7 19 1 22 -12 121 -10 121 3 0 5 6 3
13 -3 10 -7 29 -8 60 -2 32 6 47 5 47 -2 0 -6 11 0 25 13 22 21 30 20 26 -2 0
-5 11 -8 27 -9 15 0 36 -2 47 -4 11 -2 23 1 27 8 6 9 8 9 8 -1 0 -9 5 -10 19
-3 10 6 21 8 24 4 12 -11 72 -11 79 0 6 9 8 9 8 0 0 -8 77 -11 294 -11 270 0
294 1 289 16 -3 13 -2 14 4 4 11 -15 63 -27 63 -14 0 4 9 8 20 8 11 0 20 -3
20 -6 0 -4 22 -7 50 -7 27 0 47 4 44 9 -6 9 10 11 19 2 10 -11 150 -13 169 -3
11 6 19 5 23 -2 9 -14 54 -3 79 19 18 16 18 16 7 -5 -11 -22 -10 -22 44 -21
43 1 55 5 55 17 1 13 2 13 11 -2 6 -9 15 -15 20 -12 5 4 7 11 4 16 -4 5 -1 9
4 9 6 0 11 -7 11 -15 0 -9 9 -15 23 -16 12 0 32 -2 43 -5 16 -2 24 3 29 19 22
62 17 59 50 33 17 -13 26 -28 22 -32 -4 -5 -12 -2 -17 5 -5 8 -15 11 -25 7
-35 -13 -14 -17 145 -30 14 -1 41 4 61 10 31 10 39 10 53 -4 15 -15 18 -15 26
-2 6 9 10 10 10 3 0 -8 18 -11 54 -10 38 1 52 5 49 14 -3 7 1 13 8 13 9 1 7 6
-6 16 -16 12 -17 16 -6 23 25 16 41 2 34 -30 -4 -22 -2 -29 10 -29 9 0 19 9
22 21 5 15 10 18 18 10 7 -7 6 -15 -3 -26 -10 -13 -9 -15 7 -15 10 0 29 7 41
16 20 14 26 12 23 -8 0 -5 8 -8 20 -8 16 0 19 4 14 23 -4 15 -3 18 3 9 5 -8
13 -14 18 -14 5 0 8 -4 6 -9 -3 -13 22 -11 37 4 10 10 12 9 9 -3 -2 -11 5 -14
27 -12 16 2 32 7 35 11 7 10 90 8 90 -3 0 -4 7 -6 15 -2 8 3 26 1 39 -4 18 -7
29 -4 46 12 20 19 21 19 18 2 -3 -16 4 -19 42 -19 25 0 51 4 58 9 9 6 16 6 20
-1 10 -16 149 -15 164 1 11 11 17 11 36 -2 33 -21 229 -23 243 -2 8 13 11 13
19 -1 6 -11 24 -16 55 -17 39 0 46 2 41 16 -5 15 -5 15 6 1 10 -12 32 -15 98
-15 47 1 91 5 98 9 7 5 14 3 17 -5 4 -10 42 -14 153 -16 81 -1 156 -4 167 -6
11 -2 30 0 42 5 13 5 25 4 28 -1 8 -13 82 -13 90 0 4 6 12 7 18 3 18 -11 19
-11 384 -17 188 -3 355 -9 369 -12 20 -5 31 -2 39 10 11 14 14 14 18 2 4 -11
23 -14 69 -14 35 0 142 -2 238 -6 96 -4 380 -13 630 -21 250 -8 527 -17 615
-20 88 -3 228 -8 310 -11 83 -2 191 -7 240 -9 84 -4 91 -3 107 18 17 22 17 22
12 1 -5 -20 -2 -22 30 -22 30 0 35 2 25 14 -9 11 -8 14 5 14 9 0 16 -6 16 -14
0 -22 48 -27 55 -5 5 16 25 18 65 9 3 0 -8 -7 -25 -14 -28 -12 -25 -12 42 -12
40 1 69 4 65 8 -6 6 -18 9 -62 17 -3 1 2 5 9 10 9 6 22 6 33 0 10 -6 23 -7 28
-4 16 10 34 -6 19 -16 -27 -17 13 -29 106 -31 50 -1 117 -3 150 -4 33 -1 66 3
73 8 8 7 12 7 12 -1 0 -13 59 -14 80 -1 12 8 11 10 -7 10 -12 0 -24 4 -27 8
-3 5 19 9 49 9 38 0 52 -4 49 -12 -3 -7 -11 -12 -17 -11 -7 0 -14 -3 -17 -9
-3 -6 19 -11 54 -13 46 -2 56 0 48 10 -7 9 -6 17 3 25 9 8 16 9 20 3 3 -5 24
-8 46 -7 21 2 39 -1 39 -6 0 -5 -20 -7 -45 -5 -29 2 -45 -1 -45 -8 0 -7 17
-12 38 -13 20 0 53 -3 72 -6 35 -5 963 -52 1580 -80 184 -8 372 -17 417 -20
45 -3 153 -8 240 -11 87 -2 176 -7 198 -9 88 -8 390 -17 384 -11 -4 4 -35 8
-70 10 -90 5 -80 20 14 24 l79 3 -16 24 c-15 23 -15 25 1 25 14 0 18 8 17 30
-1 40 -15 52 -61 56 -21 2 -39 4 -40 5 -5 3 -17 5 -78 12 -33 5 -82 12 -110
17 -90 17 -115 18 -121 9 -3 -5 -15 -7 -27 -4 -12 2 -80 7 -152 10 -71 3 -148
7 -170 9 -22 3 -123 10 -225 15 -102 6 -223 13 -270 16 -166 10 -607 34 -730
40 -69 3 -196 11 -283 16 -87 6 -231 12 -320 14 -89 2 -174 6 -189 10 -34 9
-71 -2 -61 -18 3 -7 -3 -4 -14 6 -23 20 -53 23 -53 5 0 -9 -3 -10 -8 -2 -10
15 -98 24 -111 11 -8 -8 -11 -7 -11 2 0 11 -3 11 -16 0 -11 -9 -18 -9 -22 -2
-4 6 -31 11 -60 10 -29 0 -55 3 -59 6 -3 4 -12 2 -20 -4 -9 -8 -13 -8 -13 0 0
7 -29 10 -90 8 -50 -1 -90 0 -90 3 0 3 -33 6 -73 6 -39 1 -119 5 -177 8 -128
7 -251 9 -265 5 -5 -1 -21 0 -35 4 -30 7 -254 17 -394 17 -55 0 -97 2 -94 5 6
6 479 6 593 0 39 -2 162 -6 275 -10 113 -4 226 -8 252 -10 26 -2 50 0 53 5 8
13 -15 17 -110 18 -49 0 -108 3 -130 6 -22 3 -137 8 -255 11 -118 3 -269 8
-335 10 -220 8 -723 15 -1440 20 -390 3 -777 8 -860 11 -82 2 -426 6 -763 8
-338 2 -616 7 -619 10 -10 9 46 18 73 12 22 -6 25 -4 20 10 -5 13 -4 15 7 5
12 -10 103 -17 132 -11 6 1 15 1 20 0 28 -6 101 3 107 13 5 8 8 7 8 -4 0 -15
25 -17 238 -17 130 0 397 -3 592 -6 195 -3 567 -8 825 -11 699 -8 1141 -15
1320 -20 88 -3 284 -7 435 -10 151 -3 399 -10 550 -15 351 -12 420 -12 420 0
0 6 5 10 11 10 5 0 7 -5 4 -10 -3 -6 3 -11 14 -12 12 -1 33 -3 49 -4 15 -1 86
-5 157 -8 72 -3 155 -7 185 -11 30 -3 276 -17 545 -30 552 -29 931 -50 1145
-66 80 -5 164 -9 187 -8 23 2 45 0 49 -4 4 -4 21 -7 38 -7 49 0 106 -12 101
-20 -3 -5 -28 -6 -55 -3 -32 3 -50 1 -50 -6 0 -7 22 -11 53 -12 28 0 84 -4
122 -8 39 -4 72 -4 76 0 3 5 39 8 80 8 86 -1 98 1 118 19 8 8 17 10 20 5 5 -7
104 -10 168 -5 23 2 24 14 5 49 -10 18 -10 23 0 23 46 0 -83 40 -147 45 -47 4
-128 16 -134 19 -3 2 -28 7 -56 11 -27 4 -61 9 -75 11 -75 11 -648 57 -995 78
-889 56 -1141 68 -1181 57 -22 -6 -42 -7 -48 -2 -20 16 -88 25 -95 12 -6 -9
-15 -9 -35 -1 -34 13 -49 13 -41 0 3 -5 -6 -3 -21 5 -27 13 -54 11 -54 -6 0
-13 -28 -11 -37 4 -4 6 -19 13 -33 14 -193 12 -366 19 -635 28 -93 3 -226 8
-295 10 -69 3 -433 9 -810 15 -377 5 -840 12 -1030 15 -190 3 -608 8 -928 11
-555 5 -585 4 -605 -13 -11 -10 -17 -13 -14 -7 4 7 -1 15 -10 18 -24 10 -203
5 -231 -5 -13 -5 -21 -5 -18 0 3 4 -30 9 -73 10 -51 1 -82 -2 -86 -10 -5 -7
-10 -7 -14 -1 -7 11 -120 22 -126 12 -2 -3 -28 -4 -57 -1 -29 3 -183 6 -342 6
-227 0 -290 -3 -294 -13 -3 -10 -7 -10 -18 -2 -16 14 -584 20 -584 7 0 -5 -4
-6 -10 -2 -5 3 -87 6 -182 7 -156 1 -176 0 -203 -18 -16 -10 -26 -14 -22 -8 9
15 -36 34 -63 27 -13 -4 -17 -8 -10 -13 6 -4 -4 -7 -22 -7 -18 0 -36 4 -39 9
-4 6 -15 4 -27 -3 -17 -11 -24 -11 -34 -1 -16 16 -67 15 -102 -3 -35 -18 -37
-18 -30 -2 3 9 -4 13 -27 11 -38 -3 -81 -23 -73 -36 3 -4 0 -8 -5 -8 -6 0 -11
10 -11 23 0 18 -2 19 -11 7 -7 -10 -12 -11 -15 -4 -3 6 -16 9 -29 6 -14 -2
-32 1 -40 8 -8 6 -23 9 -34 5 -10 -3 -22 -1 -26 5 -5 8 -11 8 -20 0 -8 -7 -19
-9 -24 -6 -5 4 -14 -1 -20 -11 -8 -16 -14 -16 -58 -5 -26 7 -50 17 -51 23 -2
5 -8 6 -14 3 -6 -4 -5 -10 3 -15 11 -7 11 -9 1 -9 -7 0 -20 7 -28 15 -19 19
-29 19 -48 -1 -9 -8 -16 -11 -16 -6 0 6 -16 9 -35 8 -20 -2 -38 1 -41 6 -4 5
-10 5 -17 -1 -7 -5 -24 -8 -39 -6 -16 2 -28 -1 -28 -7 0 -12 -102 0 -111 14
-8 13 -2560 9 -2576 -4 -8 -6 -13 -7 -13 -1 0 11 -144 12 -155 1 -3 -3 -21 -3
-38 0 -71 13 -807 5 -807 -9 0 -6 -6 -7 -13 -2 -6 4 -86 9 -177 10 -301 3
-611 19 -715 37 -11 2 -32 4 -47 5 -16 0 -28 4 -28 9 0 4 199 6 443 5 244 -1
460 2 480 7 20 4 37 4 37 -1 0 -9 472 -5 488 5 5 3 12 1 14 -6 3 -9 13 -10 39
-2 19 6 43 8 54 4 11 -4 24 -5 28 -3 4 3 59 6 121 7 62 2 117 6 123 9 5 3 15
2 23 -3 8 -5 22 -4 33 2 14 7 17 7 13 -1 -9 -13 70 -13 97 1 10 5 17 5 17 -1
0 -14 243 -13 251 1 5 8 12 9 21 1 19 -14 517 -16 535 -1 9 8 13 7 13 -2 0 -9
70 -11 293 -9 160 1 309 6 329 9 21 4 39 5 41 3 3 -2 254 -4 558 -3 526 0 555
1 569 18 11 13 22 16 35 11 32 -12 45 -10 45 9 0 14 2 15 10 2 12 -20 76 -23
95 -4 19 19 19 34 1 34 -17 0 -31 18 -21 28 3 3 10 0 15 -8 7 -11 10 -12 10
-2 0 7 5 10 11 7 5 -4 20 4 32 17 l23 25 -23 10 c-13 6 -23 7 -23 2 0 -4 -6
-6 -14 -3 -11 4 -13 0 -9 -15 8 -30 -15 -26 -27 4 -11 29 -25 32 -40 8 -8 -13
-10 -14 -7 -2 4 13 -3 14 -45 9 -27 -4 -51 -3 -54 2 -6 9 -609 8 -1199 -3z
m1292 -65 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-80 -26 c-3
-8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m43 -8 c0 -13 -5 -18 -15
-14 -16 7 -19 17 -8 27 12 13 23 7 23 -13z m44 5 c-4 -8 -8 -15 -10 -15 -2 0
-4 7 -4 15 0 8 4 15 10 15 5 0 7 -7 4 -15z m51 -13 c-3 -3 -11 0 -18 7 -9 10
-8 11 6 5 10 -3 15 -9 12 -12z m325 -172 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11
10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m333 -23 c7 4 6 0 -2 -10 -13 -16 -36
-14 -26 3 3 5 0 12 -6 16 -8 4 -7 9 2 15 10 6 15 3 17 -11 2 -13 8 -18 15 -13z
m-288 4 c-3 -6 -14 -11 -23 -11 -13 0 -13 2 4 14 21 15 30 14 19 -3z m205 -15
c0 -2 -9 -6 -20 -9 -11 -3 -18 -1 -14 4 5 9 34 13 34 5z m-86 -32 c2 -12 12
-19 30 -20 26 -1 45 -17 46 -37 0 -11 -60 -3 -88 12 -25 13 -30 41 -7 41 9 0
12 6 8 18 -3 9 -3 14 1 10 4 -3 9 -14 10 -24z m-278 -11 c21 -28 16 -39 -6
-15 -11 12 -20 24 -20 27 0 11 13 4 26 -12z m703 -13 c9 -27 8 -30 -11 -30
-14 0 -18 5 -14 15 3 8 2 14 -2 14 -19 -3 -23 2 -12 16 18 22 27 19 39 -15z
m-845 5 c-7 -16 -24 -21 -24 -6 0 8 7 13 27 20 1 1 0 -6 -3 -14z m1017 -37
c-10 -11 -12 -9 -9 6 1 10 -3 21 -9 23 -7 3 -13 -3 -13 -12 0 -9 -5 -13 -10
-10 -7 4 -6 13 1 27 l11 20 21 -21 c17 -17 19 -23 8 -33z m-391 32 c0 -5 -4
-10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m113 -10 c4
-16 0 -20 -19 -20 -22 0 -23 2 -12 20 7 11 16 20 19 20 4 0 9 -9 12 -20z m520
6 c7 -18 -1 -26 -25 -26 -20 0 -25 26 -5 33 20 9 25 8 30 -7z m182 -14 c16 -9
17 -11 3 -12 -29 0 -47 11 -41 27 3 8 9 11 12 5 3 -5 15 -14 26 -20z m661 7
c16 1 36 1 44 2 8 0 24 0 35 -1 20 -1 199 -1 244 0 18 0 21 -3 13 -13 -7 -8
-32 -11 -71 -10 -35 1 -61 -2 -61 -8 0 -6 -7 -6 -19 0 -10 6 -21 8 -24 5 -3
-3 -11 -3 -18 2 -7 4 -68 6 -136 6 -78 -1 -123 2 -123 8 0 6 11 8 24 6 14 -3
30 2 37 10 8 10 14 12 19 4 4 -6 20 -11 36 -11z m448 10 c-5 -8 4 -10 30 -7
23 2 36 0 36 -8 0 -15 -60 -24 -106 -17 -27 4 -40 2 -48 -9 -15 -21 -56 -41
-56 -28 0 5 7 10 15 10 8 0 19 9 25 19 10 20 45 37 67 33 6 -2 14 2 18 8 3 5
11 10 16 10 6 0 7 -5 3 -11z m-2251 -24 c-7 -21 -13 -19 -13 6 0 11 4 18 10
14 5 -3 7 -12 3 -20z m823 8 c-3 -21 -26 -30 -26 -10 0 7 3 17 7 20 12 12 21
7 19 -10z m194 -3 c10 0 20 -9 23 -20 6 -23 -11 -27 -19 -5 -4 8 -12 15 -20
15 -8 0 -14 8 -13 18 0 10 3 12 6 5 2 -7 13 -13 23 -13z m267 -6 c-9 -9 -28 6
-21 18 4 6 10 6 17 -1 6 -6 8 -13 4 -17z m-1703 7 c4 -5 -3 -7 -14 -4 -23 6
-26 13 -6 13 8 0 17 -4 20 -9z m221 0 c3 -5 1 -12 -5 -16 -5 -3 -10 1 -10 9 0
18 6 21 15 7z m834 0 c7 -5 9 -11 4 -14 -5 -3 -15 -2 -23 3 -8 5 -22 5 -32 -1
-11 -6 -18 -6 -18 0 0 9 19 17 45 20 6 0 16 -3 24 -8z m582 -13 c-13 -4 -28
-5 -34 -1 -14 9 23 22 42 15 10 -4 8 -8 -8 -14z m154 12 c-3 -5 -12 -10 -18
-10 -7 0 -6 4 3 10 19 12 23 12 15 0z m145 0 c0 -5 -7 -10 -16 -10 -8 0 -12 5
-9 10 3 6 10 10 16 10 5 0 9 -4 9 -10z m136 1 c-3 -5 -23 -9 -43 -9 -29 0 -33
2 -18 9 28 11 67 11 61 0z m-1376 -11 c0 -5 -2 -10 -4 -10 -2 0 -12 -3 -20 -6
-12 -5 -15 -2 -10 10 7 17 34 22 34 6z m6930 0 c0 -5 -5 -10 -11 -10 -5 0 -7
5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m-7099 -23 c-7 -7 -14 -8 -21 -1 -6 6
-2 10 12 11 16 2 18 -1 9 -10z m569 -3 c0 -2 -15 -4 -32 -4 -23 0 -29 3 -19 9
12 8 51 4 51 -5z m-1183 0 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13
-5z m-427 -28 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10
-2 10 -4z m6483 -13 c-40 -2 -106 -2 -145 0 -40 1 -8 3 72 3 80 0 112 -2 73
-3z m-9773 -19 c0 -8 -4 -12 -10 -9 -5 3 -10 10 -10 16 0 5 5 9 10 9 6 0 10
-7 10 -16z m-493 -29 c0 -8 -6 -15 -13 -15 -8 0 -11 6 -8 15 4 8 9 15 13 15 4
0 8 -7 8 -15z m547 1 c29 -10 48 -11 68 -4 16 6 40 7 54 4 15 -4 23 -3 20 3
-3 5 3 7 14 4 11 -3 20 -10 20 -17 0 -7 3 -7 8 -1 4 6 23 10 43 10 20 0 35 -4
33 -10 -3 -6 24 -11 66 -11 38 -1 70 2 70 7 0 5 5 9 10 9 6 0 10 -6 10 -14 0
-14 -43 -27 -76 -22 -10 2 -22 -4 -26 -13 -6 -14 -7 -14 -7 2 -1 16 -8 17 -63
13 -66 -6 -80 -12 -58 -26 8 -5 11 -13 6 -17 -5 -4 -11 -2 -13 5 -3 6 -12 12
-21 12 -15 0 -15 2 -2 10 12 8 10 10 -10 10 -88 2 -124 -1 -130 -11 -5 -8 -14
-5 -28 9 -17 17 -39 62 -30 62 2 0 21 -6 42 -14z m750 -13 c-3 -20 -2 -24 5
-14 11 17 77 17 97 0 11 -9 14 -9 14 0 0 8 8 10 20 6 11 -4 20 -2 20 4 0 14
93 7 98 -7 3 -9 9 -9 24 -1 11 6 26 8 35 5 11 -4 13 -2 9 9 -5 13 -2 14 17 3
12 -7 28 -11 35 -10 23 5 12 -18 -13 -28 -14 -5 -25 -15 -25 -22 -1 -8 -6 -7
-14 5 -16 21 -26 22 -26 2 0 -8 -5 -15 -11 -15 -6 0 -9 6 -6 13 4 10 -8 14
-49 15 -30 0 -52 -3 -50 -7 3 -4 -4 -8 -15 -8 -10 -1 -19 2 -19 6 0 5 -49 9
-110 9 -60 0 -110 -4 -110 -9 0 -5 -5 -9 -11 -9 -5 0 -7 5 -4 10 7 11 -3 13
-103 14 -50 1 -71 -2 -68 -11 3 -6 -4 -13 -15 -16 -16 -4 -18 -3 -9 8 8 10 7
16 -6 23 -14 8 -13 10 10 16 15 4 31 4 36 1 6 -4 10 -2 10 4 0 5 -6 12 -12 14
-8 4 -7 6 3 6 9 1 22 -6 29 -14 8 -10 17 -12 22 -7 6 6 24 4 46 -3 20 -7 39
-10 42 -6 3 4 20 7 39 8 18 0 40 8 49 17 21 21 21 21 16 -11z m3734 10 c5 -18
-16 -16 -35 3 -15 14 -14 16 7 12 13 -1 25 -9 28 -15z m-5078 -3 c8 -5 12 -12
9 -15 -8 -8 -39 5 -39 16 0 11 11 11 30 -1z m138 -10 c3 -7 0 -10 -7 -6 -6 4
-11 2 -11 -3 0 -6 -4 -11 -9 -11 -8 0 -8 11 -2 38 2 9 25 -6 29 -18z m52 9 c0
-7 30 -10 88 -9 48 2 98 2 112 1 l25 -1 -25 -13 c-18 -10 -37 -11 -69 -4 -33
7 -45 6 -52 -4 -5 -8 -9 -9 -9 -3 0 6 -13 11 -30 12 -16 0 -30 -4 -30 -11 0
-6 -7 -2 -15 9 -17 23 -19 34 -5 34 6 0 10 -5 10 -11z m5280 -11 c0 -16 -3
-19 -11 -11 -6 6 -8 16 -5 22 11 17 16 13 16 -11z m-3603 -14 c9 4 13 1 11 -6
-6 -17 -58 -22 -58 -5 0 7 6 19 13 26 10 10 13 9 15 -4 2 -10 10 -14 19 -11z
m3363 16 c0 -12 -8 -12 -35 0 -18 8 -17 9 8 9 15 1 27 -3 27 -9z m130 0 c0 -5
-4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m700 6 c0
-3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m-4250
-21 c0 -8 -6 -15 -13 -15 -8 0 -14 7 -14 15 0 8 6 15 14 15 7 0 13 -7 13 -15z
m123 7 c4 8 6 7 6 -4 1 -19 -33 -26 -43 -9 -9 14 6 22 20 10 8 -7 14 -6 17 3z
m75 -21 c-7 -2 -16 -9 -20 -15 -5 -8 -13 -6 -24 6 -25 24 -10 38 26 25 17 -7
25 -14 18 -16z m82 13 c0 -6 -11 -16 -25 -22 -22 -10 -25 -9 -25 7 0 23 4 27
30 27 11 0 20 -5 20 -12z m50 4 c0 -9 3 -9 12 0 16 16 29 15 26 0 -4 -16 -36
-26 -61 -20 -14 3 -15 7 -6 18 14 17 29 18 29 2z m3645 -6 c-3 -3 -11 0 -18 7
-9 10 -8 11 6 5 10 -3 15 -9 12 -12z m-4015 0 c0 -5 -7 -9 -15 -9 -8 0 -12 4
-9 9 3 4 9 8 15 8 5 0 9 -4 9 -8z m760 4 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1
-10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m2980 0 c0 -11 -19 -15 -25 -6 -3 5 1
10 9 10 9 0 16 -2 16 -4z m-2800 -16 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3
6 -1 10 4 10 6 0 11 -4 11 -10z m3345 0 c-3 -5 -10 -10 -16 -10 -5 0 -9 5 -9
10 0 6 7 10 16 10 8 0 12 -4 9 -10z m-4825 -9 c0 -6 -4 -13 -10 -16 -5 -3 -10
1 -10 9 0 9 5 16 10 16 6 0 10 -4 10 -9z m2000 5 c0 -11 -19 -15 -25 -6 -3 5
1 10 9 10 9 0 16 -2 16 -4z m100 -2 c0 -8 -19 -13 -24 -6 -3 5 1 9 9 9 8 0 15
-2 15 -3z m110 -3 c0 -8 -90 -4 -99 5 -2 2 19 4 47 4 29 0 52 -4 52 -9z m80
-1 c0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15 -4 15 -10z
m-2829 -14 c-7 -8 -21 -12 -31 -9 -27 7 -15 23 17 23 21 0 23 -3 14 -14z
m3089 -16 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4
10 -10z m8076 -47 c-10 -10 -19 5 -10 18 6 11 8 11 12 0 2 -7 1 -15 -2 -18z
m-273 0 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m-4881 -35 c-7
-7 -12 -8 -12 -2 0 14 12 26 19 19 2 -3 -1 -11 -7 -17z m4205 6 c-3 -3 -12 -4
-19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m33 -4 c0 -5 -4 -10 -10 -10 -5 0 -10
5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m-4270 -10 c0 -5 -7 -7 -15 -4 -8
4 -15 8 -15 10 0 2 7 4 15 4 8 0 15 -4 15 -10z m4920 -2 c0 -5 -3 -8 -7 -9 -5
0 -18 -2 -30 -3 -21 -2 -29 4 -19 15 8 7 56 4 56 -3z m126 -8 c0 -22 -5 -24
-31 -13 -15 5 -14 8 6 19 13 7 24 13 24 14 1 0 1 -9 1 -20z m159 -20 c-3 -5
-10 -10 -16 -10 -5 0 -9 5 -9 10 0 6 7 10 16 10 8 0 12 -4 9 -10z m183 1 c10
-6 9 -10 -7 -14 -21 -5 -36 5 -24 17 8 8 15 7 31 -3z m170 -16 c11 -10 -73 -9
-86 1 -13 10 -7 11 33 7 28 -3 51 -7 53 -8z m1025 -52 c-13 -2 -33 -2 -45 0
-13 2 -3 4 22 4 25 0 35 -2 23 -4z m215 -10 c-16 -2 -40 -2 -55 0 -16 2 -3 4
27 4 30 0 43 -2 28 -4z m232 -7 c8 -2 -16 -4 -55 -5 -38 0 -65 3 -58 7 11 7
77 6 113 -2z m199 -12 c2 -2 -28 -4 -68 -4 -40 0 -70 4 -67 9 5 8 126 4 135
-5z m271 -16 c0 -6 -13 -8 -31 -4 -17 3 -59 7 -93 8 l-61 1 65 6 c76 7 120 3
120 -11z m103 1 c38 -1 53 -4 39 -7 -33 -10 -132 -2 -132 10 0 6 7 7 16 4 9
-3 43 -6 77 -7z m207 -15 c0 -2 -30 -3 -67 -2 -62 1 -64 2 -23 7 43 6 90 3 90
-5z m160 -4 c0 -5 -10 -10 -22 -10 -19 0 -20 2 -8 10 19 13 30 13 30 0z m40
-10 c0 -5 -4 -10 -9 -10 -6 0 -13 5 -16 10 -3 6 1 10 9 10 9 0 16 -4 16 -10z"
      />
      <path
        d="M5816 1715 c-3 -8 -13 -15 -21 -15 -9 0 -14 -4 -11 -9 3 -5 -1 -12
-10 -15 -8 -3 -12 -10 -9 -16 3 -5 0 -10 -7 -10 -7 0 -4 -6 7 -12 11 -6 26
-19 33 -27 12 -14 13 -14 8 3 -5 13 -2 17 8 13 8 -3 16 -1 18 5 8 22 46 19 53
-3 5 -15 9 -18 15 -9 6 9 9 9 15 0 5 -8 14 -1 26 19 24 40 25 59 2 39 -10 -8
-36 -16 -58 -16 -29 -1 -36 1 -25 8 8 5 11 10 5 11 -5 0 1 4 14 8 23 6 23 7 7
24 -23 23 -43 22 -25 0 13 -17 13 -17 -7 0 -25 21 -30 21 -38 2z m20 -41 c-3
-9 -6 -20 -6 -25 0 -6 -4 -7 -10 -4 -16 10 -12 45 6 45 11 0 14 -5 10 -16z"
      />
      <path d="M5958 1713 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" />
      <path
        d="M5970 1673 c0 -12 -6 -24 -12 -26 -8 -4 -9 -6 -2 -6 20 -2 39 28 26
41 -9 9 -12 7 -12 -9z"
      />
      <path
        d="M6000 1640 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"
      />
      <path
        d="M6037 1643 c-14 -13 -6 -33 12 -33 14 0 18 5 14 20 -5 21 -15 25 -26
13z"
      />
      <path d="M5846 1613 c-6 -14 -5 -15 5 -6 7 7 10 15 7 18 -3 3 -9 -2 -12 -12z" />
      <path
        d="M6085 1610 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0
-7 -4 -4 -10z"
      />
      <path
        d="M13305 1530 c-14 -6 -3 -9 39 -9 33 -1 56 2 53 6 -11 10 -70 12 -92
3z"
      />
      <path
        d="M13430 1520 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5
0 -10 -4 -10 -10z"
      />
      <path
        d="M12935 1241 c11 -10 195 -20 195 -10 0 9 -50 16 -134 18 -46 1 -67
-1 -61 -8z"
      />
      <path d="M13145 1229 c-4 -5 3 -9 14 -9 26 0 35 15 11 17 -11 1 -22 -2 -25 -8z" />
      <path
        d="M13205 1230 c-3 -5 3 -10 15 -10 12 0 18 5 15 10 -3 6 -10 10 -15 10
-5 0 -12 -4 -15 -10z"
      />
      <path
        d="M13260 1230 c0 -11 5 -11 87 -14 34 -1 48 2 43 9 -11 13 -130 17
-130 5z"
      />
      <path
        d="M13410 1220 c0 -5 14 -10 30 -10 17 0 30 5 30 10 0 6 -13 10 -30 10
-16 0 -30 -4 -30 -10z"
      />
      <path
        d="M13495 1220 c-14 -6 -15 -9 -5 -10 8 0 33 -3 55 -5 22 -3 216 -14
430 -25 494 -26 1089 -58 1270 -69 163 -10 175 -10 175 0 0 13 -26 17 -136 24
-60 3 -129 8 -154 10 -25 2 -101 7 -170 10 -69 3 -154 8 -190 10 -123 9 -995
54 -1125 59 -71 2 -139 1 -150 -4z"
      />
      <path
        d="M15445 1110 c3 -5 17 -10 31 -10 14 0 22 4 19 10 -3 6 -17 10 -31 10
-14 0 -22 -4 -19 -10z"
      />
      <path d="M3398 1033 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
      <path d="M3478 1033 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" />
      <path d="M3543 1033 c9 -2 25 -2 35 0 9 3 1 5 -18 5 -19 0 -27 -2 -17 -5z" />
      <path d="M3648 1033 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
      <path d="M4023 1023 c15 -2 39 -2 55 0 15 2 2 4 -28 4 -30 0 -43 -2 -27 -4z" />
      <path d="M4118 1023 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
      <path d="M4183 1023 c15 -2 37 -2 50 0 12 2 0 4 -28 4 -27 0 -38 -2 -22 -4z" />
      <path
        d="M4490 1010 c296 -13 790 -21 790 -12 0 4 -28 8 -62 9 -35 0 -252 3
-483 6 -272 4 -359 3 -245 -3z"
      />
      <path d="M5308 993 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" />
      <path d="M5363 993 c9 -2 25 -2 35 0 9 3 1 5 -18 5 -19 0 -27 -2 -17 -5z" />
      <path
        d="M5465 990 c3 -5 10 -10 16 -10 5 0 9 5 9 10 0 6 -7 10 -16 10 -8 0
-12 -4 -9 -10z"
      />
      <path d="M5515 990 c4 -6 11 -8 16 -5 14 9 11 15 -7 15 -8 0 -12 -5 -9 -10z" />
      <path
        d="M5555 990 c-4 -6 5 -10 19 -10 14 0 26 5 26 10 0 6 -9 10 -19 10 -11
0 -23 -4 -26 -10z"
      />
      <path d="M5615 990 c-4 -6 3 -10 14 -10 25 0 27 6 6 13 -8 4 -17 2 -20 -3z" />
      <path d="M5681 990 c-7 -4 28 -8 78 -9 50 -1 91 2 91 7 0 10 -152 13 -169 2z" />
      <path
        d="M5860 990 c0 -5 28 -11 63 -12 208 -5 297 -5 297 3 0 5 -12 9 -27 10
-266 8 -333 8 -333 -1z"
      />
      <path d="M6230 980 c0 -6 17 -10 39 -8 22 1 38 5 36 8 -7 11 -75 11 -75 0z" />
      <path
        d="M6324 983 c10 -10 114 -15 120 -5 3 5 -25 9 -61 10 -37 1 -63 -1 -59
-5z"
      />
      <path
        d="M6500 980 c0 -5 9 -10 20 -10 11 0 20 5 20 10 0 6 -9 10 -20 10 -11
0 -20 -4 -20 -10z"
      />
      <path
        d="M6550 980 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
-15 -4 -15 -10z"
      />
      <path
        d="M6855 980 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z"
      />
      <path d="M6728 973 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
      <path d="M6913 973 c9 -2 25 -2 35 0 9 3 1 5 -18 5 -19 0 -27 -2 -17 -5z" />
      <path d="M6975 972 c9 -9 65 -11 65 -2 0 4 -16 8 -36 8 -19 0 -33 -3 -29 -6z" />
      <path
        d="M7055 970 c3 -5 28 -9 55 -8 27 1 46 6 44 10 -3 4 -28 8 -55 8 -31 0
-48 -4 -44 -10z"
      />
      <path d="M7200 970 c-12 -7 -10 -9 7 -7 12 0 19 5 17 9 -6 10 -6 10 -24 -2z" />
      <path
        d="M7295 970 c11 -5 29 -9 40 -9 17 -1 17 1 5 9 -8 5 -26 9 -40 9 -23 0
-23 -1 -5 -9z"
      />
      <path d="M7428 968 c5 -5 16 -8 23 -6 8 3 3 7 -10 11 -17 4 -21 3 -13 -5z" />
      <path
        d="M7493 968 c-5 -9 -5 -9 75 -14 34 -1 62 1 62 7 0 5 -15 9 -32 10 -18
0 -48 1 -66 2 -19 1 -36 -1 -39 -5z"
      />
      <path
        d="M7646 961 c-3 -5 17 -9 44 -9 27 0 47 4 44 9 -3 5 -23 9 -44 9 -21 0
-41 -4 -44 -9z"
      />
      <path d="M7760 961 c0 -5 21 -9 47 -8 33 0 41 3 28 8 -28 11 -75 11 -75 0z" />
      <path
        d="M7905 960 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z"
      />
      <path
        d="M7950 960 c-13 -8 -12 -10 5 -11 56 -5 105 -3 105 2 0 19 -84 26
-110 9z"
      />
      <path
        d="M8111 962 c-31 -10 -3 -21 57 -20 95 0 691 -13 727 -17 31 -3 397
-12 805 -20 490 -10 996 -23 1345 -35 279 -10 362 -13 725 -30 430 -20 517
-23 646 -25 72 -1 135 -4 140 -7 23 -12 367 -26 382 -15 7 6 12 6 12 -1 0 -6
33 -12 80 -14 67 -2 80 0 80 12 0 9 -8 16 -17 16 -10 0 -58 4 -108 7 -215 16
-537 28 -553 21 -28 -12 -42 -13 -39 -2 3 12 -20 13 -448 32 -192 9 -402 18
-465 21 -63 3 -245 9 -405 15 -269 9 -385 12 -950 25 -115 3 -462 10 -770 15
-308 6 -626 12 -707 15 -103 3 -148 1 -148 -7 0 -7 -4 -7 -12 0 -8 6 -75 11
-158 12 -80 0 -159 2 -176 4 -17 1 -36 0 -43 -2z"
      />
      <path
        d="M13130 803 c0 -8 42 -33 55 -33 3 0 5 7 5 16 0 11 -5 14 -16 10 -9
-4 -23 -1 -30 5 -8 6 -14 7 -14 2z"
      />
      <path
        d="M13216 785 c4 -10 21 -15 48 -16 22 -1 59 -2 81 -4 152 -13 1019 -54
1465 -70 85 -3 196 -8 245 -10 360 -18 445 -18 445 -1 0 13 -10 15 -47 14 -27
-1 -88 1 -138 5 -116 8 -206 13 -755 37 -250 11 -498 22 -550 25 -112 6 -479
22 -667 30 -114 4 -131 3 -127 -10z"
      />
      <path
        d="M15521 686 c-14 -17 39 -24 189 -26 58 0 170 -3 249 -5 91 -3 141 -1
135 5 -5 5 -54 11 -109 14 -55 2 -113 7 -130 10 -16 3 -96 7 -176 10 -117 5
-149 3 -158 -8z"
      />
    </g>
  </svg>
);
