cd "C:\Program Files (x86)\VideoLAN\VLC"
$BASE_DIR="C:\Users\bhansm\Pictures\Node\Snapshots"
$FPS = 30
$SNAPSHOT_INTERVAL_MILLISECONDS = 400
$SCENE_RATIO = $FPS * $SNAPSHOT_INTERVAL_MILLISECONDS / 1000
$VIDEO_FILE_EXTENSION = ".mp4"

$VIDEO_DIR_PATH="C:\work\Company\node\udemy\NodeJsGraphQL\Videos\09 Dynamic Routes  Advanced Models"
[string[]]$VIDEO_FILE_NAMES = @("118 Passing Data with POST Requests", "119 Adding a Cart Model", "120 Using Query Params", "121 Pre-Populating the Edit Product Page with Data", "122 Linking to the Edit Page", "123 Editing the Product Data", "124 Adding the Product-Delete Functionality", "125 Deleting Cart Items", "126 Displaying Cart Items on the Cart Page", "127 Deleting Cart Items", "128 Fixing a Delete Product Bug", "129 Wrap Up")
if($VIDEO_FILE_NAMES.Length -eq 0){
	$ob = Get-ChildItem "$VIDEO_DIR_PATH" -Filter "*$VIDEO_FILE_EXTENSION"
	$VIDEO_FILE_NAMES = $ob.name.replace($VIDEO_FILE_EXTENSION, "")
}

foreach($VIDEO_FILE_NAME in $VIDEO_FILE_NAMES){
	$OUTPUT_DIR = [IO.Path]::Combine($BASE_DIR, $VIDEO_FILE_NAME).toString()
	[system.io.directory]::CreateDirectory($OUTPUT_DIR)
	.\vlc.exe "$VIDEO_DIR_PATH\$VIDEO_FILE_NAME$VIDEO_FILE_EXTENSION" --video-filter=scene --scene-ratio=$SCENE_RATIO --scene-prefix="$VIDEO_FILE_NAME" --scene-path="$OUTPUT_DIR" vlc://quit | out-null
}

$VIDEO_DIR_PATH="C:\work\Company\node\udemy\NodeJsGraphQL\Videos\10 SQL Introduction"
[string[]]$VIDEO_FILE_NAMES = @()
if($VIDEO_FILE_NAMES.Length -eq 0){
	$ob = Get-ChildItem "$VIDEO_DIR_PATH" -Filter "*$VIDEO_FILE_EXTENSION"
	$VIDEO_FILE_NAMES = $ob.name.replace($VIDEO_FILE_EXTENSION, "")
}

foreach($VIDEO_FILE_NAME in $VIDEO_FILE_NAMES){
	$OUTPUT_DIR = [IO.Path]::Combine($BASE_DIR, $VIDEO_FILE_NAME).toString()
	[system.io.directory]::CreateDirectory($OUTPUT_DIR)
	.\vlc.exe "$VIDEO_DIR_PATH\$VIDEO_FILE_NAME$VIDEO_FILE_EXTENSION" --video-filter=scene --scene-ratio=$SCENE_RATIO --scene-prefix="$VIDEO_FILE_NAME" --scene-path="$OUTPUT_DIR" vlc://quit | out-null
}