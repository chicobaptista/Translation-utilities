rem Extract all zip files to a folder with their name
7z x *.zip -r -o*


rem extracts images from folders
@echo off
setlocal

rem Define source and backup path.
set "SourcePath=%~dp0\"
set "BackupPath=%~dp0\images\"

rem For each subfolder in source path check if there is a subfolder "\word\media".
rem If subfolder "media" exists, copy all files and subfolders of "media"
rem to the appropriate backup directory with subfolder name
rem in source folder path. Then remove the subfolder "media" in source
rem folder even if being completely empty to avoid processing this folder
rem again when not being recreated again in the meantime.

for /D %%# in ("%SourcePath%\*") do (
    if exist "%%#\word\media\*" (
        %SystemRoot%\System32\xcopy.exe "%%#\word\media\*" "%BackupPath%\%%~nx#_media\" /H /I /K /Q /R /S /Y >nul
        rd /Q /S "%%#\media"
    )
)
for /D %%# in ("%SourcePath%\*") do (
    if exist "%%#\ppt\media\*" (
        %SystemRoot%\System32\xcopy.exe "%%#\ppt\media\*" "%BackupPath%\%%~nx#_media\" /H /I /K /Q /R /S /Y >nul
        rd /Q /S "%%#\media"
    )
)
endlocal