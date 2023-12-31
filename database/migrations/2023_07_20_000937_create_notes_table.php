<?php

use App\Enums\NoteEnum;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('notes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('category_id')->constrained()->onDelete('cascade');
            $table->string('title');
            $table->longText('description');
            $table->enum('visibility', NoteEnum::visibility());
            $table->longText('image');
            $table->enum('story_type',NoteEnum::type())->nullable();
            $table->string('continuation_story')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notes');
    }
};
