$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
$src = Join-Path $root 'node_modules\@fontsource\poppins\files'
$dst = Join-Path $root 'public\fonts\poppins'

if (!(Test-Path $src)) {
  throw "Missing source folder: $src"
}

New-Item -ItemType Directory -Force -Path $dst | Out-Null

Copy-Item -Force (Join-Path $src 'poppins-latin-*-normal.woff2') $dst
Copy-Item -Force (Join-Path $src 'poppins-latin-*-italic.woff2') $dst

Get-ChildItem -File $dst -Filter 'poppins-latin-*.woff2' | Select-Object Name, Length

