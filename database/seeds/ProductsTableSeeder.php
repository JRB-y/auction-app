<?php

use App\Product;
use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::create([
            'name' => 'Iphone 11',
            'desc' => 'Accedat huc suavitas quaedam oportet sermonum atque morum, haudquaquam mediocre condimentum amicitiae. Tristitia autem et in omni re severitas habet illa quidem gravitatem, sed amicitia remissior esse debet et liberior et dulcior et ad omnem comitatem facilitatemque proclivior.',
            'img_path' => 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWYK2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567304928359'
        ]);

        Product::create([
            'name' => 'Playstation 4',
            'desc' => 'Accedat huc suavitas quaedam oportet sermonum atque morum, haudquaquam mediocre condimentum amicitiae. Tristitia autem et in omni re severitas habet illa quidem gravitatem, sed amicitia remissior esse debet et liberior et dulcior et ad omnem comitatem facilitatemque proclivior.',
            'img_path' => 'https://images.frandroid.com/wp-content/uploads/2019/04/sony-playstation-4-pro.png'
        ]);

        Product::create([
            'name' => 'TV LG 32LD460',
            'desc' => 'Accedat huc suavitas quaedam oportet sermonum atque morum, haudquaquam mediocre condimentum amicitiae. Tristitia autem et in omni re severitas habet illa quidem gravitatem, sed amicitia remissior esse debet et liberior et dulcior et ad omnem comitatem facilitatemque proclivior.',
            'img_path' => 'https://www.lg.com/my/images/televisions/32ld460/gallery/large01.jpg'
        ]);
    }
}
