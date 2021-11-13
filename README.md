# Ciphering-CLI-tool

The application is used to encrypt and decrypt using the Caesar cipher, Atbash, or ROT8 cipher. It transform only latin letters. All other characters, such as numbers, punctuation marks, symbols, accepttable.

## How to install

Download or clone this repository
Change directory to "Ciphering-CLI-tool"
Install dependencies.
npm i or npm install

## How to use

Command string:

node caesar options

## Options:

-s, --shift: cipher shift. Positive or negative number
-a, --action: action. Use encode to encrypt text and decode to decrypt.
-i, --input: input file. (Optional)
-o, --output: output file. (Optional)

## Examples:

```
node my_ciphering_cli -c "C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `Hello world! Do you know NodeJS?`

> output.txt
> `Runnk ckhnv! Vk ake olkc LkvuPG?`

```
 node my_ciphering_cli -c "C1-A-C0-R0" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `My name is Ivan. What is yoour name?`

> output.txt
> `Dr cpdl hx Hupc. Tipw hx rbbvy cpdl?`

```
 node my_ciphering_cli -c "A-A-A-R1-R0-R0-R0-C1-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `The winter is comming! Have you seen Game of the Thrones?`

> output.txt
> `Hvs kwbhsf wg qcaawbu! Vojs mci gssb Uoas ct hvs Hvfcbsg?`
