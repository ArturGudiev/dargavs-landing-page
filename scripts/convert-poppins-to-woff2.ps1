$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
$bin = Join-Path $root 'node_modules\.bin\ttf2woff2.cmd'
$dir = Join-Path $root 'public\fonts\poppins'

if (!(Test-Path $bin)) {
  throw "Missing converter binary: $bin"
}
if (!(Test-Path $dir)) {
  throw "Missing fonts directory: $dir"
}

$pairs = @(
  @('Poppins-Regular.ttf', 'Poppins-Regular.woff2'),
  @('Poppins-Medium.ttf', 'Poppins-Medium.woff2'),
  @('Poppins-SemiBold.ttf', 'Poppins-SemiBold.woff2'),
  @('Poppins-Bold.ttf', 'Poppins-Bold.woff2')
)

foreach ($p in $pairs) {
  $inPath = Join-Path $dir $p[0]
  $outPath = Join-Path $dir $p[1]

  if (!(Test-Path $inPath)) {
    throw "Missing input: $inPath"
  }

  Start-Process `
    -FilePath $bin `
    -NoNewWindow `
    -Wait `
    -RedirectStandardInput $inPath `
    -RedirectStandardOutput $outPath
}

Get-ChildItem $dir -Filter '*.woff2' | Select-Object Name, Length

