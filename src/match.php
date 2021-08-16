<?php

namespace TPam\Match;

use Flarum\Database\AbstractModel;
use phpDocumentor\Reflection\Types\Boolean;

/**
 * @property int $tid
 * @property int $owner_id
 * @property int $match_count
 * @property Boolean  $is_finished
 * @property string pick_up_point
 * @property string destination
 * @property date date_time
 * @property int maxWait
 */
class Rule extends AbstractModel
{
    protected $table = 'email_rules';

    public static function build(int $tid, int $owner_id, int $match_count, Boolean $is_finished, string $pick_up_point,
                                 string $destination, date $date_time, int $maxWait){
        $rule = new static();

        $rule->tid = $tid;
        $rule->owner_id = $owner_id;
        $rule->match_count = $match_count;
        $rule->is_finished = $is_finished;
        $rule->pick_up_point = $pick_up_point;
        $rule->destination = $destination;
        $rule->date_time = $date_time;
        $rule->maxWait = $maxWait;

        return $rule;
    }

    public function updateName(string $name)
    {
        $this->name = $name;

        return $this;
    }

    public function updateValue(string $value)
    {
        $this->value = $value;

        return $this;
    }

    public function updateActive(int $active)
    {
        $this->active = $active > 0 ? 1 : 0;

        return $this;
    }
}
