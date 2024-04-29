<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subscriptionPlans = [
            [
                'name' => 'Basic',
                'price' => 10000,
                'active_period_in_months' => 3,
                'features' => json_encode([
                    '1 Month Free Trial',
                    'Basic Features',
                    '24/7 Support',
                ]),
            ],
            [
                'name' => 'Premium',
                'price' => 98000,
                'active_period_in_months' => 12,
                'features' => json_encode([
                    '1 Month Free Trial',
                    'Basic Features',
                    '24/7 Support',
                    'Premium Features',
                    'Lifetime Free Updates',
                    'Premium Support',
                    'Premium Support',
                ]),
            ]
        ];

        SubscriptionPlan::insert($subscriptionPlans);
    }
}
