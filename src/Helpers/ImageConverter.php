<?php 

// it's not mine 
function get_string_between($string, $start, $end){
  $string = ' ' . $string;
  $ini = strpos($string, $start);
  if ($ini == 0) return '';
  $ini += strlen($start);
  $len = strpos($string, $end, $ini) - $ini;
  return substr($string, $ini, $len);
}


if ( !file_exists(__DIR__ . '/thumb_images') ) {
  mkdir ('thumb_images', 0744);
}

$json = file_get_contents('FinalImages.json');
$json_data = json_decode($json,true);

$counter = 0;

foreach($json_data as $record) {
  $image_code = $record['img_thumb'];
  $image_type = get_string_between($image_code, 'data:image/', ';base64');
  $image_code = str_replace('data:image/' . $image_type .';base64,', '', $image_code);
  $image_code = str_replace(' ', '+', $image_code);

  $data = base64_decode($image_code);
  
  $image_name =  $record['id'] . '.' . $image_type;
  file_put_contents('thumb_images/' . $image_name, $data);

  // echo $record['id'] .'      ' . $image_type . '<br>';

  $json_data[$counter]['image_path'] = $image_name;
  unset($record['img_thumb']);
  $json_data[$counter] = $record;
  $counter++;
} 

$final_json = json_encode($json_data);

file_put_contents('database.json', $final_json);


?>