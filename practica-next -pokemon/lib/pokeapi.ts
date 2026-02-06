
export interface Pokemon {
    id: number;
    name: string;
    image: string;
    stats: {
        hp: number;
        attack: number;
        defense: number;
    };
}

const BASE_URL = 'https://pokeapi.co/api/v2';

export async function getRandomPokemon(): Promise<Pokemon> {
    const id = Math.floor(Math.random() * 898) + 1;
    return getPokemonDetail(id.toString());
}

export async function getPokemonDetail(idOrName: string): Promise<Pokemon> {
    const res = await fetch(`${BASE_URL}/pokemon/${idOrName}`);
    if (!res.ok) throw new Error('Failed to fetch pokemon');
    const data = await res.json();

    return {
        id: data.id,
        name: data.name,
        image: data.sprites.other['official-artwork'].front_default || data.sprites.front_default,
        stats: {
            hp: data.stats.find((s: any) => s.stat.name === 'hp')?.base_stat || 0,
            attack: data.stats.find((s: any) => s.stat.name === 'attack')?.base_stat || 0,
            defense: data.stats.find((s: any) => s.stat.name === 'defense')?.base_stat || 0,
        }
    };
}

export async function getGenerationPokemon(genId: number, limit: number = 10): Promise<Pokemon[]> {
    let offset = 0;
    let max = 151;

    if (genId === 1) { offset = 0; max = 151; }
    else if (genId === 2) { offset = 151; max = 100; }
    else if (genId === 3) { offset = 251; max = 135; }
    else if (genId === 4) { offset = 386; max = 107; }
    else if (genId === 4) { offset = 386; max = 107; }

    const randomIds = new Set<number>();
    const rangeStart = offset + 1;
    const rangeEnd = offset + max;

    while (randomIds.size < limit) {
        const randomId = Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;
        randomIds.add(randomId);
    }

    const promises = Array.from(randomIds).map(id => getPokemonDetail(id.toString()));
    return Promise.all(promises);
}

export async function getPokemonList(limit: number = 20, offset: number = 0): Promise<Pokemon[]> {
    const res = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
    if (!res.ok) throw new Error('Failed to fetch pokemon list');
    const data = await res.json();

    const promises = data.results.map((p: any) => {
        const id = p.url.split('/').filter(Boolean).pop();
        return getPokemonDetail(id);
    });

    return Promise.all(promises);
}
