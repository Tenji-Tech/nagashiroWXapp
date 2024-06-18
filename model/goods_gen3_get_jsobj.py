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
# B1
# 生ホタルイカ.jpg -> 01.jpg
# 活けスルメイカ.jpg -> 02.jpg
# 活けダコ.jpg -> 03.jpg
# スルメイカ.jpg -> 04.jpg
# 白イカ.jpg -> 05.jpg
# 生タコ足.jpg -> 06.jpg
# B2
# 殻付き白海老.jpg -> 01.jpg
# 赤海老.jpg -> 02.jpg
# B3
# 鮑.jpg -> 01.jpg
# 生食用カキ.jpg -> 02.jpg
# 石垣貝.jpg -> 03.jpg
# B4
# 毛蟹.jpg -> 01.jpg
# ズワイガニフレーク.jpg -> 02.jpg
# 花咲ガニ.jpg -> 03.jpg
# むきズワイガニ棒肉.jpg -> 04.jpg
# input_products_B = [
#     ('殻付き白海老', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/B/B2/01.jpg'),
#     ('赤海老', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/B/B2/02.jpg'),
#     ('鮑', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/B/B3/01.jpg'),
#     ('生食用カキ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/B/B3/02.jpg'),
#     ('石垣貝', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/B/B3/03.jpg'),
#     ('毛蟹', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/B/B4/01.jpg'),
#     ('ズワイガニフレーク', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/B/B4/02.jpg'),
#     ('花咲ガニ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/B/B4/03.jpg'),
#     ('むきズワイガニ棒肉', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/B/B4/04.jpg'),
# ]
# C1
# 冷凍サーモン.jpg -> 01.jpg
# カンパチフィレ.jpg -> 02.jpg
# ハマチフィレ.jpg -> 03.jpg
# 冷凍本マグロ.jpg -> 04.jpg
# C2
# 冷凍紋甲イカ.jpg -> 01.jpg
# 冷凍ホタルイカ沖漬け.jpg -> 02.jpg
# C4
# 笹しぐれ.jpg -> 01.jpg
# 梅水晶.jpg -> 02.jpg
# input_products_C = [
#     ('冷凍サーモン', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/C/C1/01.jpg'),
#     ('カンパチフィレ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/C/C1/02.jpg'),
#     ('ハマチフィレ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/C/C1/03.jpg'),
#     ('冷凍本マグロ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/C/C1/04.jpg'),
#     ('冷凍紋甲イカ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/C/C2/01.jpg'),
#     ('冷凍ホタルイカ沖漬け', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/C/C2/02.jpg'),
#     ('笹しぐれ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/C/C4/01.jpg'),
#     ('梅水晶', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/C/C4/02.jpg'),
# ]


# input_products_D = [
# ('ピーマン', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D1/01.jpg') ,
# ('熊本トマト', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D1/02.jpg') ,
# ('混色ピーマン', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D1/03.jpg') ,
# ('ししとう', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D1/04.jpg') ,
# ('ミニトマト', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D1/05.jpg') ,
# ('アグリトマト', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D1/06.jpg') ,
# ('レンコン', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D3/01.jpg') ,
# ('カボチャ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D3/02.jpg') ,
# ('赤カブ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D3/03.jpg') ,
# ('玉ねぎ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D3/04.jpg') ,
# ('赤丸大根', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D3/05.jpg') ,
# ('ミニ南瓜(かぼちゃ)', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D3/06.jpg') ,
# ('かぶ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D3/07.jpg') ,
# ('紫大根', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D3/08.jpg') ,
# ('ペコロス', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D3/09.jpg') ,
# ('大根', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D3/10.jpg') ,
# ('赤大根', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D3/11.jpg') ,
# ('さつまいも', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D4/01.jpg') ,
# ('長芋', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D4/02.jpg') ,
# ('紫芋', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D4/03.jpg') ,
# ('新じゃが芋', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D4/04.jpg') ,
# ('にんじん', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D4/05.jpg') ,
# ('安納芋', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D4/06.jpg') ,
# ('根芋', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D4/07.jpg') ,
# ('なめこ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D5/01.jpg') ,
# ('株とりなめこ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D5/02.jpg') ,
# ('しめじ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D5/03.jpg') ,
# ('舞茸', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D5/04.jpg') ,
# ('椎茸', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D5/05.jpg') ,
# ('マツタケ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D5/06.jpg') ,
# ('大豆', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D6/01.jpg') ,
# ('生枝豆', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D6/02.jpg') ,
# ('小豆', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D6/03.jpg') ,
# ('グリーンピース', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D6/04.jpg') ,
# ('とうもろこし', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D6/05.jpg') ,
# ('枝豆(茶豆味)', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D6/06.jpg') ,
# ('黒豆', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D6/07.jpg') ,
# ('白菜', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D7/01.jpg') ,
# ('春菊', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D7/02.jpg') ,
# ('干瓢', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D7/03.jpg') ,
# ('冬瓜', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D7/04.jpg') ,
# ('菜の花', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D7/05.jpg') ,
# ('ゴーヤー', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D7/06.jpg') ,
# ('糸三つ葉', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D7/07.jpg') ,
# ('ほうれん草', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D7/08.jpg') ,
# ('長わらび', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D8/01.jpg') ,
# ('海ぶどう', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D8/02.jpg') ,
# ('たんぽぽ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D8/03.jpg') ,
# ('わかめ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D8/04.jpg') ,
# ('こごみ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D8/05.jpg') ,
# ('ハチク', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D8/06.jpg') ,
# ('菊花', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D9/01.jpg') ,
# ('食用花', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D9/02.jpg') ,
# ('むき銀杏', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D9/03.jpg') ,
# ('干し菊', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D9/04.jpg') ,
# ('銀杏', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/D/D9/05.jpg') ,
# ]

# input_products_E = [
# ('三色苺', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/E/E01/01.jpg') ,
# ('あまおう苺', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/E/E01/02.jpg') ,
# ('マスクメロン', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/E/E02/01.jpg') ,
# ('夕張メロン赤肉', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/E/E02/02.jpg') ,
# ('晴王', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/E/E03/01.jpg') ,
# ('マスカット', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/E/E03/02.jpg') ,
# ('シャインマスカット', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/E/E03/03.jpg') ,
# ('梨', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/E/E04/01.jpg') ,
# ('白桃', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/E/E05/01.jpg') ,
# ('黄桃', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/E/E05/02.jpg') ,
# ('ふじりんご', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/E/E06/01.jpg') ,
# ('こみつりんご', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/E/E06/02.jpg') ,
# ('あんぽ柿', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/E/E07/01.jpg') ,
# ('柿ゆべし(柚餅子)', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/E/E07/02.jpg') ,
# ('柚子巻き柿', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/E/E07/03.jpg') ,
# ('梅肉', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/E/E08/01.jpg') ,
# ('白梅', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/E/E08/02.jpg') ,
# ('紅梅', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/E/E08/03.jpg') ,
# ('南高梅', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/E/E08/04.jpg') ,
# ('剥き栗', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/E/E09/01.jpg') ,
# ('殻付き栗', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/E/E09/02.jpg') ,
# ('小夏みかん', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/E/E10/01.jpg') ,
# ('金柑', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/E/E10/02.jpg') ,
# ('みかん', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/E/E10/03.jpg') ,
# ('若桃甘露煮', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/E/E11/01.jpg') ,
# ('スモモ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/E/E11/02.jpg') ,
# ('ドラゴンフルーツ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/E/E11/03.jpg') ,
# ('梅ねり', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/E/E11/04.jpg') ,
# ('葡萄の葉', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/E/E12/01.jpg') ,
# ('梅の枝', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/E/E12/02.jpg') ,
# ('椿の葉', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/E/E12/03.jpg') ,
# ]

# input_products_F = [
# ('ゴボウたまり漬け', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/F/F1/01.jpg') ,
# ('高菜漬け', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/F/F1/02.jpg') ,
# ('桜の花塩漬け', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/F/F1/03.jpg') ,
# ('桜の葉塩漬け', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/F/F1/04.jpg') ,
# ('イカ塩辛', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/F/F2/01.jpg') ,
# ('葛粉', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/F/F3/01.jpg') ,
# ('酒粕', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/F/F3/02.jpg') ,
# ('ウニ豆腐', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/F/F3/03.jpg') ,
# ('干瓢', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/F/F4/01.jpg') ,
# ('海苔佃煮', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/F/F4/02.jpg') ,
# ('日高昆布', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/F/F4/03.jpg') ,
# ('海苔', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/F/F4/04.jpg') ,
# ]
input_products_G = [
('黒糖', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/G/G1/01.jpg') ,
('白しょう油', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/G/G1/02.jpg') ,
('赤酢', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/G/G1/03.jpg') ,
('厨房器具', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/G/G2/01.jpg') ,
('消耗品', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/G/G3/01.jpg') ,
]
input_products_Z = [
# ('メヒカリ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/Z/Z1/01.jpg') ,
# ('鰈(カレイ)', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/Z/Z1/02.jpg') ,
# ('サクラマス', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/Z/Z1/03.jpg') ,
# ('ヒラメ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/Z/Z1/04.jpg') ,
# ('ソイ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/Z/Z1/05.jpg') ,
# ('メジナ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/Z/Z1/06.jpg') ,
# ('鬼カサゴ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/Z/Z1/07.jpg') ,
# ('アカムツ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/Z/Z1/08.jpg') ,
# ('アナゴ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/Z/Z1/09.jpg') ,
# ('太刀魚', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/Z/Z1/10.jpg') ,
# ('新子', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/Z/Z1/11.jpg') ,
# ('かすべ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/Z/Z2/01.jpg') ,
# ('ハモ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/Z/Z2/02.jpg') ,
# ('フグ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/Z/Z2/03.jpg') ,
# ('八角', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/Z/Z2/04.jpg') ,
# ('クエ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/Z/Z2/05.jpg') ,
# ('つぶ貝', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/Z/Z3/01.jpg') ,
# ('むき粒貝', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/Z/Z3/02.jpg') ,
('芽ネギ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/Z/Z4/01.jpg') ,
('ニラ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/Z/Z4/02.jpg') ,
('長ネギ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/Z/Z4/03.jpg') ,
('赤紫蘇', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/Z/Z4/04.jpg') ,
('ニンニク', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/Z/Z4/05.jpg') ,
('葉わさび', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/Z/Z4/06.jpg') ,
('みょうが', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/Z/Z4/07.jpg') ,
('小ねぎ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/Z/Z4/08.jpg') ,
('大葉', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/Z/Z4/09.jpg') ,
('青梅', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/Z/Z5/01.jpg') ,
('ライチ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/Z/Z5/02.jpg') ,
('枇杷', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/Z/Z5/03.jpg') ,
('マンゴー', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/Z/Z5/04.jpg') ,
]

input_products_Z_24M6 = [
#     ('シタビラメ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z1/21.jpg') ,
# ('ヒラマサ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z1/22.jpg') ,
# ('ゴマフエダイ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z1/23.jpg') ,
# ('シマアオダイ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z1/24.jpg') ,
# ('クマエビ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z3/21.jpg') ,
# ('マガキガイ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z3/22.jpg') ,
# ('ホタテガイ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z3/23.jpg') ,
# ('イセエビ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z3/24.jpg') ,
# ('ベニズワイガニ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z3/25.jpg') ,
# ('ケガニ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z3/26.jpg') ,
# ('加茂茄子', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z4/21.jpg') ,
# ('糸瓜', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z4/22.jpg') ,
# ('枝豆', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z4/23.jpg') ,
# ('白瓜', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z4/24.jpg') ,
# ('新さつま芋', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z4/25.jpg') ,
# ('冬瓜', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z4/26.jpg') ,
# ('もろきゅうり', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z4/27.jpg') ,
# ('加賀太胡瓜', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z4/28.jpg') ,
# ('石川芋', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z4/29.jpg') ,
# ('丸茄子', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z4/30.jpg') ,
# ('水茄子', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z4/31.jpg') ,
('皮付きヤングコーン', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z4/32.jpg') ,
('とうもろこし', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z4/33.jpg') ,
('ハス', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z4/34.jpg') ,
('パパイヤ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z5/21.jpg') ,
('メロン', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z5/22.jpg') ,
('ピオーネ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z5/23.jpg') ,
('びわ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z5/24.jpg') ,
('夕張メロン', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z5/25.jpg') ,
('アメリカンチェリー', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z5/26.jpg') ,
('巨峰', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z5/27.jpg') ,
('いちじく', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z5/28.jpg') ,
('青柚子', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z5/29.jpg') ,
('桃', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z5/30.jpg') ,
('ゴールドキウイ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z5/31.jpg') ,
('さくらんぼ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z5/32.jpg') ,
('宮古島マンゴー', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z5/33.jpg') ,
('スイカ', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z5/34.jpg') ,
('マンゴー', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z5/35.jpg') ,
('シャインマスカット', 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_m6_catz/Z/Z5/36.jpg') ,
]
js_objects = generate_js_object(input_products_Z_24M6)

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

