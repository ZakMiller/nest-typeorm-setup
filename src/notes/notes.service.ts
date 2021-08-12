import { Note } from './entities/note.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateNoteDto } from './dto/create-note.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private notesRepo: Repository<Note>,
  ) {}

  create(createNoteDto: CreateNoteDto) {
    return this.notesRepo.insert(createNoteDto);
  }

  findAll() {
    return this.notesRepo.find();
  }
}
