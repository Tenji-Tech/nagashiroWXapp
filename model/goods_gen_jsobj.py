import random
import json
import requests
import uuid

def translate_to_chinese_and_english(japanese_title):
    subscription_key = '479c8026f9dc43c09adbd605ed88d680'
    endpoint = 'https://api.cognitive.microsofttranslator.com/' 
    region = 'japaneast'
    path = '/translate?api-version=3.0'
    params = '&to=zh-Hans&to=en'
    constructed_url = endpoint + path + params

    headers = {
        'Ocp-Apim-Subscription-Key': subscription_key,
        'Ocp-Apim-Subscription-Region': region,
        'Content-type': 'application/json',
        'X-ClientTraceId': str(uuid.uuid4())
    }

    body = [{
        'text': japanese_title
    }]

    request = requests.post(constructed_url, headers=headers, json=body)
    response = request.json()

    chinese_translation = response[0]['translations'][0]['text']
    english_translation = response[0]['translations'][1]['text']

    return chinese_translation, english_translation

def translate_to_chinese_and_english_aaplDic(japanese_title):
    from subprocess import check_output

    apple_script = f'''
    set jp_title to "{japanese_title}"
    set chinese_title to ""
    set english_title to ""

    tell application "Dictionary"
        set resultList to (lookup japanese_title)
        repeat with result in resultList
            if result contains "简体中文" then
                set chinese_title to result
            else if result contains "English" then
                set english_title to result
            end if
        end repeat
    end tell
    
    return chinese_title & "|" & english_title
    '''

    output = check_output(['osascript', '-e', apple_script]).decode().strip()
    chinese_title, english_title = output.split('|')
    return chinese_title, english_title

def generate_js_object(products):
    js_objects = []

    for idx, (title_jp, url) in enumerate(products, start=1):
        # category_code = url.split('/')[-2]
        # category_id = category_code[-1]  # Extract category ID from URL
        category_code = url.split('/')[-2]  # Correct category extraction
        category_id = category_code[-3:]  # Get the last two characters
        image_number = url.split('/')[-1].split('.')[0]
        # print("category_code,category_id,image_number:",category_code,category_id,image_number)
        spu_id = f"{category_code}0{image_number}"

        title_cn, title_en = translate_to_chinese_and_english(title_jp)
        price = random.randint(200, 1000) * 100
        stock_quantity = random.randint(1, 1000)
        sold_num = random.randint(1, 1000)

        product = {
            'saasId': '88888888',
            'storeId': '1000',
            'spuId': spu_id,
            'title': title_cn,
            'title_en': title_en,
            'title_jp': title_jp,
            'primaryImage': url,
            'images': [url],
            'video': 0,
            'available': 1,
            'minSalePrice': price,
            'minLinePrice': price,
            'maxSalePrice': price,
            'maxLinePrice': price,
            'spuStockQuantity': stock_quantity,
            'soldNum': sold_num,
            'isPutOnSale': 1,
            'categoryIds': [category_id],
            'groupIdList': [category_id],
            'specList': [],
            'skuList': [
                {
                    'skuId': f'1356766{idx+30}',
                    'skuImage': url,
                    'specInfo': [],
                    'priceInfo': [{'priceType': 1, 'price': price}],
                    'stockInfo': {
                        'stockQuantity': random.randint(1, 100),
                        'safeStockQuantity': 0,
                        'soldQuantity': random.randint(1, 50),
                    },
                    'weight': {
                        'value': random.randint(500, 1000),
                        'unit': 'g',
                        'desc': f'{random.randint(500, 1000)} g / {random.randint(3, 10)}枚',
                        'shape': random.randint(1, 5),
                        'storageCondition': random.randint(1, 5)
                    },
                    'volume': 0,
                    'profitPrice': 0,
                }
            ],
            'spuTagList': [],
            'limitInfo': [],
            'desc': [url],
            'etitle': '',
        }

        js_objects.append(product)

    return js_objects

# Example usage
# 生ホタルイカ.jpg -> 01.jpg
# 活けスルメイカ.jpg -> 02.jpg
# 活けダコ.jpg -> 03.jpg
# スルメイカ.jpg -> 04.jpg
# 白イカ.jpg -> 05.jpg
# 生タコ足.jpg -> 06.jpg
input_products = [
    ('生ホタルイカ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/B/B1/01.jpg'),
    ('活けスルメイカ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/B/B1/02.jpg'),
    # Add more products as needed
]

js_objects = generate_js_object(input_products)

def format_js_object(product):
    def format_value(value):
        if isinstance(value, str):
            return f"'{value}'"
        elif isinstance(value, list):
            return "[" + ", ".join(format_value(v) for v in value) + "]"
        elif isinstance(value, dict):
            return "{" + ", ".join(f"{k}: {format_value(v)}" for k, v in value.items()) + "}"
        else:
            return str(value)
    
    formatted = "{\n" + ",\n".join(f"  {k}: {format_value(v)}" for k, v in product.items()) + "\n},"
    return formatted

for obj in js_objects:
    print(format_js_object(obj))

