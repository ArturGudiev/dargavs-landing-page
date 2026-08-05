$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
$bin = Join-Path $root 'node_modules\.bin\ttf2woff2.cmd'
$srcDir = Join-Path $root 'public\fonts\poppins\Poppins'
$outDir = Join-Path $root 'public\fonts\poppins'

if (!(Test-Path $bin)) {
  throw "Missing converter binary: $bin"
}
if (!(Test-Path $srcDir)) {
  throw "Missing source directory: $srcDir"
}

Get-ChildItem -File $srcDir -Filter '*.ttf' | ForEach-Object {
  $name = $_.BaseName
  $inPath = $_.FullName
  $outPath = Join-Path $outDir ($name + '.woff2')

  Start-Process `
    -FilePath $bin `
    -NoNewWindow `
    -Wait `
    -RedirectStandardInput $inPath `
    -RedirectStandardOutput $outPath
}

Get-ChildItem -File $outDir -Filter 'Poppins-*.woff2' | Select-Object Name, Length

